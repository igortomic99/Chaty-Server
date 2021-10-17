import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";
import { MyContext } from "src/types/types";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { v4 } from "uuid";
import { isAuth } from "../middleware/isAuth";
import { Conversation } from "../types/Conversation";
import { Profile } from "../types/Profile";
import { User } from "../types/User";
import { UsernamePasswordInput } from "../types/UsernamePasswordInput";
import { sendEmail } from "../utils/sendEmails";

const prisma = new PrismaClient();

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
  @Field(() => Profile, { nullable: true })
  profile?: Profile;
}

@Resolver(User)
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("options", () => UsernamePasswordInput) options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "Username too short",
          },
        ],
      };
    }
    if (options.username.includes("@")) {
      return {
        errors: [
          {
            field: "username",
            message: "Cannot include @",
          },
        ],
      };
    }
    if (options.email.length <= 2) {
      return {
        errors: [
          {
            field: "email",
            message: "Invalid email",
          },
        ],
      };
    }
    if (!options.email.includes("@")) {
      return {
        errors: [
          {
            field: "email",
            message: "Invalid email",
          },
        ],
      };
    }
    if (options.password.length <= 3) {
      return {
        errors: [
          {
            field: "password",
            message: "Password too short",
          },
        ],
      };
    }
    const hashedPassword = await argon2.hash(options.password);
    let user;
    try {
      user = await prisma.user.create({
        data: {
          email: options.email,
          username: options.username,
          password: hashedPassword,
        },
      });
    } catch (err) {
      if (err.code === "23505" || err.message.includes("Unique constraint")) {
        return {
          errors: [
            {
              field: "username",
              message: err.message,
            },
          ],
        };
      }
      console.log(err.message);
    }
    req.session!.userId = user?.id;
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse | null> {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: "Could not find username",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "incorrect password",
          },
        ],
      };
    }
    req.session!.userId = user.id;
    return { user };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) => {
      req.session.destroy((err) => {
        res.clearCookie("qid");
        if (err) {
          resolve(false);
          return;
        }
        resolve(true);
      });
    });
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MyContext
  ) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      //user does not exist
      return true;
    }
    const token = v4();
    await redis.set(
      "forgot-password:" + token,
      user.id,
      "ex",
      1000 * 60 * 60 * 24 * 3
    );

    await sendEmail(
      email,
      `<a href="http://localhost:3000/change-password/${token}>reset password</a>"`
    );
    return true;
  }

  @Query(() => User)
  async me(@Ctx() { req }: MyContext) {
    const userId = req.session.userId;
    if (!userId) {
      throw new Error("you are not logged in");
    }
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  }

  @Mutation(() => Boolean)
  async follow(@Ctx() { req }: MyContext, @Arg("userId") userId: string) {
    const meId = req.session.userId;
    if (!meId) {
      throw new Error("Not authenticated");
    }
    if (meId === userId) {
      throw new Error("You cant follow yourself");
    }
    const result = await prisma.follows.create({
      data: {
        followerId: userId,
        followingId: meId,
      },
    });
    if (!result) {
      throw new Error("Error with following");
    }
    return true;
  }

  @Query(() => [User])
  @UseMiddleware(isAuth)
  async followers(@Ctx() { req }: MyContext) {
    const userId = req.session.userId;
    const followers = await prisma.follows.findMany({
      where: {
        followerId: userId,
      },
    });
    let realFollowers: User[] = [];
    for (const f of followers) {
      const user = await prisma.user.findUnique({
        where: {
          id: f.followingId,
        },
      });
      if (!user) {
        throw new Error("Error with finding followers");
      }
      realFollowers.push(user);
    }
    return realFollowers;
  }

  @Query(() => User)
  @UseMiddleware(isAuth)
  async findUser(@Arg("username") username: string) {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (!user) {
      throw new Error("User does not exist");
    }
    return user;
  }

  @Mutation(() => Profile)
  @UseMiddleware(isAuth)
  async createProfile(@Arg("bio") bio: string, @Ctx() { req }: MyContext) {
    const userId = req.session.userId;
    const profile = await prisma.profile.create({
      data: {
        bio,
        user: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        user: true,
      },
    });
    if (!profile) {
      throw new Error("Cant create profile");
    }
    return profile;
  }

  @Query(() => Profile)
  @UseMiddleware(isAuth)
  async profile(@Ctx() { req }: MyContext) {
    const user = await prisma.user.findUnique({
      where: {
        id: req.session.userId,
      },
      include: {
        profile: true,
      },
    });
    const profile = await prisma.profile.findUnique({
      where: {
        id: user?.profile?.id,
      },
      include: {
        user: {
          include: {
            _count: {
              select: {
                posts: true,
                followedBy: true,
                following: true,
              },
            },
            posts: {
              include: {
                author: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new Error("User does not exist");
    }
    return profile;
  }

  @Query(() => Profile)
  async profileFromId(@Arg("id") id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        profile: true,
      },
    });
    if (!user) {
      throw new Error("user does not exits");
    }
    const profile = await prisma.profile.findUnique({
      where: {
        id: user?.profile?.id,
      },
      include: {
        user: {
          include: {
            _count: {
              select: {
                posts: true,
                followedBy: true,
                following: true,
              },
            },
            posts: {
              include: {
                author: true,
              },
            },
          },
        },
      },
    });
    if (!profile) {
      throw new Error("User does not exist");
    }
    return profile;
  }

  @Query(() => [Conversation])
  @UseMiddleware(isAuth)
  async activeConversations(@Ctx() { req }: MyContext) {
    const userId = req.session.userId;
    const conversations = await prisma.conversation.findMany({
      where: {
        participants: {
          some: {
            userId,
          },
        },
      },
      include: {
        participants: {
          include: {
            user: true,
          },
        },
      },
    });
    return conversations;
  }

  @Mutation(() => Profile)
  async findByUsername(@Arg("username") username: string) {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
      include: {
        profile: true,
      },
    });
    if (!user) {
      throw new Error("user does not exist");
    }
    const profile = await prisma.profile.findUnique({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
      },
    });
    if (!profile) {
      throw new Error("Profile not created");
    }
    return profile;
  }

  @Query(() => [User])
  @UseMiddleware(isAuth)
  async followings(@Ctx() { req }: MyContext) {
    const userId = req.session.userId;
    const followers = await prisma.follows.findMany({
      where: {
        followingId: userId,
      },
    });
    let realFollowings: User[] = [];
    for (const f of followers) {
      const user = await prisma.user.findUnique({
        where: {
          id: f.followerId,
        },
      });
      if (!user) {
        throw new Error("Cant find users");
      }
      realFollowings.push(user);
    }
    return realFollowings;
  }

  @Mutation(() => UserResponse)
  @UseMiddleware(isAuth)
  async editProfile(
    @Ctx() { req }: MyContext,
    @Arg("bio") bio: string,
    @Arg("email") email: string
  ) {
    const user = await prisma.user.findUnique({
      where: {
        id: req.session.userId,
      },
      include: {
        profile: true,
      },
    });
    if (email.length <= 2) {
      return {
        errors: [
          {
            field: "email",
            message: "Invalid email",
          },
        ],
      };
    }
    if (!email.includes("@")) {
      return {
        errors: [
          {
            field: "email",
            message: "Invalid email",
          },
        ],
      };
    }
    const profile = await prisma.profile.update({
      where: {
        id: user?.profile?.id,
      },
      data: {
        bio,
        user: {
          update: {
            email,
          },
        },
      },
      include: {
        user: true,
      },
    });
    return { profile };
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async unfollow(@Ctx() { req }: MyContext, @Arg("userId") userId: string) {
    const meId = req.session.userId;
    if (!meId) {
      throw new Error("Not authenticated");
    }
    if (meId === userId) {
      throw new Error("You cant follow yourself");
    }
    const result = await prisma.follows.delete({
      where: {
        followerId_followingId: {
          followerId: userId,
          followingId: meId,
        },
      },
    });
    if (!result) {
      throw new Error("Error with following");
    }
    return true;
  }
}

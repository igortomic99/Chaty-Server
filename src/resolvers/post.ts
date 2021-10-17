import { PrismaClient } from "@prisma/client";
import { isAuth } from "../middleware/isAuth";
import { Post } from "../types/Post";
import { MyContext } from "src/types/types";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";

const prisma = new PrismaClient();

@InputType()
class PostInput {
  @Field()
  title: string;

  @Field()
  text: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];

  @Field()
  hasMore: Boolean;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => Int, { nullable: true })
  async voteStatus(
    @Root() post: Post,
    @Ctx() { upvoteLoader, req }: MyContext
  ) {
    if (!req.session.userId) {
      return null;
    }
    const upvote = await upvoteLoader.load({
      postId: post.id,
      userId: req.session.userId,
    });
    return upvote ? upvote.value : 0;
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    if (!req.session.userId) {
      throw new Error("not logged in");
    }
    const post = await prisma.post.create({
      data: {
        title: input.title,
        content: input.text,
        createdAt: new Date(),
        userId: req.session.userId,
      },
    });
    if (!post) {
      throw new Error("Error creating post");
    }
    return post as any;
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async updatePost(
    @Arg("id") id: string,
    @Arg("newTitle") newTitle: string,
    @Arg("newContent") newContent: string
  ) {
    const post = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title: newTitle,
        content: newContent,
      },
    });
    if (!post) {
      throw new Error("Post does not exist");
    }
    return post;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Arg("postId", () => String) postId: string,
    @Arg("value", () => Int) value: number,
    @Ctx() { req }: MyContext
  ) {
    const userId = req.session.userId;
    if (!userId) {
      throw new Error("Not authenticated");
    }
    const isUpvote = value !== -1;
    const realValue = isUpvote ? 1 : -1;
    const upvote = await prisma.upvote.findUnique({
      where: {
        userId_postId: {
          postId,
          userId,
        },
      },
    });
    if (upvote && upvote.value !== realValue) {
      await prisma.upvote.update({
        where: {
          userId_postId: {
            postId,
            userId,
          },
        },
        data: {
          value: realValue,
        },
      });
      await prisma.$queryRawUnsafe(
        `update "Post"
    set points = points + $1
    where id = $2`,
        2 * realValue,
        postId
      );
    } else if (!upvote) {
      await prisma.upvote.create({
        data: {
          value: realValue,
          postId,
          userId,
        },
      });
      await prisma.$queryRawUnsafe(
        `update "Post"
      set points = points + $1
      where id = $2`,
        realValue,
        postId
      );
    }
    return true;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(@Arg("id", () => String) id: string): Promise<boolean> {
    const result = await prisma.post.delete({
      where: {
        id,
      },
    });
    if (!result) {
      throw new Error("Error with deleting post");
    }
    return true;
  }

  @Query(() => Post, { nullable: true })
  async post(@Arg("id", () => String) id: string): Promise<Post | undefined> {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    });
    if (!post) {
      throw new Error("Cannot find post");
    }
    return post as any;
  }

  @Query(() => PaginatedPosts)
  async posts(): Promise<PaginatedPosts> {
    const firstQueryResults = await prisma.post.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
      },
    });
    const limit = 20;
    return {
      posts: firstQueryResults as any,
      hasMore: firstQueryResults.length === limit,
    };
  }

  @Query(() => PaginatedPosts)
  async argumentedPost(@Arg("numberPosts") numberPosts: number) {
    const firstQueryResults = await prisma.post.findMany({
      take: numberPosts,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
      },
    });
    const limit = 20;
    return {
      posts: firstQueryResults as any,
      hasMore: firstQueryResults.length === limit,
    };
  }
}

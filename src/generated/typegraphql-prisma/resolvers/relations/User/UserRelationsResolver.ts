import * as TypeGraphQL from "type-graphql";
import { Follows } from "../../../models/Follows";
import { Message } from "../../../models/Message";
import { Post } from "../../../models/Post";
import { Profile } from "../../../models/Profile";
import { Upvote } from "../../../models/Upvote";
import { User } from "../../../models/User";
import { UsersInConversations } from "../../../models/UsersInConversations";
import { UserConversationsArgs } from "./args/UserConversationsArgs";
import { UserFollowedByArgs } from "./args/UserFollowedByArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserMessageArgs } from "./args/UserMessageArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserUpvotesArgs } from "./args/UserUpvotesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [UsersInConversations], {
    nullable: false
  })
  async conversations(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserConversationsArgs): Promise<UsersInConversations[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).conversations(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false
  })
  async Message(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserMessageArgs): Promise<Message[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Message(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => Profile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Profile | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).profile({});
  }

  @TypeGraphQL.FieldResolver(_type => [Upvote], {
    nullable: false
  })
  async upvotes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserUpvotesArgs): Promise<Upvote[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).upvotes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Follows], {
    nullable: false
  })
  async followedBy(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowedByArgs): Promise<Follows[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).followedBy(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Follows], {
    nullable: false
  })
  async following(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowingArgs): Promise<Follows[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).following(args);
  }
}

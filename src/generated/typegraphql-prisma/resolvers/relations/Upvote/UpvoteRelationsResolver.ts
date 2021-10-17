import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { Upvote } from "../../../models/Upvote";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upvote)
export class UpvoteRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() upvote: Upvote, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).upvote.findUnique({
      where: {
        userId_postId: {
          userId: upvote.userId,
          postId: upvote.postId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false
  })
  async post(@TypeGraphQL.Root() upvote: Upvote, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return getPrismaFromContext(ctx).upvote.findUnique({
      where: {
        userId_postId: {
          userId: upvote.userId,
          postId: upvote.postId,
        },
      },
    }).post({});
  }
}

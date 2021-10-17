import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUpvoteArgs } from "./args/AggregateUpvoteArgs";
import { Upvote } from "../../../models/Upvote";
import { AggregateUpvote } from "../../outputs/AggregateUpvote";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upvote)
export class AggregateUpvoteResolver {
  @TypeGraphQL.Query(_returns => AggregateUpvote, {
    nullable: false
  })
  async aggregateUpvote(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUpvoteArgs): Promise<AggregateUpvote> {
    return getPrismaFromContext(ctx).upvote.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

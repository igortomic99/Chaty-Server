import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUsersInConversationsArgs } from "./args/AggregateUsersInConversationsArgs";
import { UsersInConversations } from "../../../models/UsersInConversations";
import { AggregateUsersInConversations } from "../../outputs/AggregateUsersInConversations";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsersInConversations)
export class AggregateUsersInConversationsResolver {
  @TypeGraphQL.Query(_returns => AggregateUsersInConversations, {
    nullable: false
  })
  async aggregateUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUsersInConversationsArgs): Promise<AggregateUsersInConversations> {
    return getPrismaFromContext(ctx).usersInConversations.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

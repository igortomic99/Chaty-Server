import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUsersInConversationsArgs } from "./args/GroupByUsersInConversationsArgs";
import { UsersInConversations } from "../../../models/UsersInConversations";
import { UsersInConversationsGroupBy } from "../../outputs/UsersInConversationsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsersInConversations)
export class GroupByUsersInConversationsResolver {
  @TypeGraphQL.Query(_returns => [UsersInConversationsGroupBy], {
    nullable: false
  })
  async groupByUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUsersInConversationsArgs): Promise<UsersInConversationsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

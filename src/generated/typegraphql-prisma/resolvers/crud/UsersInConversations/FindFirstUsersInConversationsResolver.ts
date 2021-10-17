import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstUsersInConversationsArgs } from "./args/FindFirstUsersInConversationsArgs";
import { UsersInConversations } from "../../../models/UsersInConversations";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsersInConversations)
export class FindFirstUsersInConversationsResolver {
  @TypeGraphQL.Query(_returns => UsersInConversations, {
    nullable: true
  })
  async findFirstUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUsersInConversationsArgs): Promise<UsersInConversations | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

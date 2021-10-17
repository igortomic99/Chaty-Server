import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersInConversationsOrderByWithRelationInput } from "../../../inputs/UsersInConversationsOrderByWithRelationInput";
import { UsersInConversationsWhereInput } from "../../../inputs/UsersInConversationsWhereInput";
import { UsersInConversationsWhereUniqueInput } from "../../../inputs/UsersInConversationsWhereUniqueInput";
import { UsersInConversationsScalarFieldEnum } from "../../../../enums/UsersInConversationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUsersInConversationsArgs {
  @TypeGraphQL.Field(_type => UsersInConversationsWhereInput, {
    nullable: true
  })
  where?: UsersInConversationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UsersInConversationsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: UsersInConversationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"conversationId" | "userId"> | undefined;
}

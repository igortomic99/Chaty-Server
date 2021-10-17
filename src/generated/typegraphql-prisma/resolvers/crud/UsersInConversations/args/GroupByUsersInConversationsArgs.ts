import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersInConversationsOrderByWithAggregationInput } from "../../../inputs/UsersInConversationsOrderByWithAggregationInput";
import { UsersInConversationsScalarWhereWithAggregatesInput } from "../../../inputs/UsersInConversationsScalarWhereWithAggregatesInput";
import { UsersInConversationsWhereInput } from "../../../inputs/UsersInConversationsWhereInput";
import { UsersInConversationsScalarFieldEnum } from "../../../../enums/UsersInConversationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUsersInConversationsArgs {
  @TypeGraphQL.Field(_type => UsersInConversationsWhereInput, {
    nullable: true
  })
  where?: UsersInConversationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UsersInConversationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"conversationId" | "userId">;

  @TypeGraphQL.Field(_type => UsersInConversationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UsersInConversationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

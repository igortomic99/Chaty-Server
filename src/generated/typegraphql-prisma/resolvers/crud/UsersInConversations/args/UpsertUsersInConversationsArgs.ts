import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersInConversationsCreateInput } from "../../../inputs/UsersInConversationsCreateInput";
import { UsersInConversationsUpdateInput } from "../../../inputs/UsersInConversationsUpdateInput";
import { UsersInConversationsWhereUniqueInput } from "../../../inputs/UsersInConversationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUsersInConversationsArgs {
  @TypeGraphQL.Field(_type => UsersInConversationsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersInConversationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersInConversationsCreateInput, {
    nullable: false
  })
  create!: UsersInConversationsCreateInput;

  @TypeGraphQL.Field(_type => UsersInConversationsUpdateInput, {
    nullable: false
  })
  update!: UsersInConversationsUpdateInput;
}

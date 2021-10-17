import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersInConversationsUpdateInput } from "../../../inputs/UsersInConversationsUpdateInput";
import { UsersInConversationsWhereUniqueInput } from "../../../inputs/UsersInConversationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUsersInConversationsArgs {
  @TypeGraphQL.Field(_type => UsersInConversationsUpdateInput, {
    nullable: false
  })
  data!: UsersInConversationsUpdateInput;

  @TypeGraphQL.Field(_type => UsersInConversationsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersInConversationsWhereUniqueInput;
}

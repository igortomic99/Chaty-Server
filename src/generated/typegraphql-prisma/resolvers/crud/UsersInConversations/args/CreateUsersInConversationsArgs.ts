import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersInConversationsCreateInput } from "../../../inputs/UsersInConversationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUsersInConversationsArgs {
  @TypeGraphQL.Field(_type => UsersInConversationsCreateInput, {
    nullable: false
  })
  data!: UsersInConversationsCreateInput;
}

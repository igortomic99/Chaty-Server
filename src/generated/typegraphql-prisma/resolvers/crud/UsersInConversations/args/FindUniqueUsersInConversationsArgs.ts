import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersInConversationsWhereUniqueInput } from "../../../inputs/UsersInConversationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUsersInConversationsArgs {
  @TypeGraphQL.Field(_type => UsersInConversationsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersInConversationsWhereUniqueInput;
}

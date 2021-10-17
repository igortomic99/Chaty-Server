import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersInConversationsWhereInput } from "../../../inputs/UsersInConversationsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUsersInConversationsArgs {
  @TypeGraphQL.Field(_type => UsersInConversationsWhereInput, {
    nullable: true
  })
  where?: UsersInConversationsWhereInput | undefined;
}

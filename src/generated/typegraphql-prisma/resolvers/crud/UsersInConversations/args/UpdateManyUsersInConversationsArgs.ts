import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersInConversationsUpdateManyMutationInput } from "../../../inputs/UsersInConversationsUpdateManyMutationInput";
import { UsersInConversationsWhereInput } from "../../../inputs/UsersInConversationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUsersInConversationsArgs {
  @TypeGraphQL.Field(_type => UsersInConversationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: UsersInConversationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UsersInConversationsWhereInput, {
    nullable: true
  })
  where?: UsersInConversationsWhereInput | undefined;
}

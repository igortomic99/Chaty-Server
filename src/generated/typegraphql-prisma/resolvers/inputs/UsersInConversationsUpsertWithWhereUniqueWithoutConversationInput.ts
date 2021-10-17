import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCreateWithoutConversationInput } from "../inputs/UsersInConversationsCreateWithoutConversationInput";
import { UsersInConversationsUpdateWithoutConversationInput } from "../inputs/UsersInConversationsUpdateWithoutConversationInput";
import { UsersInConversationsWhereUniqueInput } from "../inputs/UsersInConversationsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsUpsertWithWhereUniqueWithoutConversationInput {
  @TypeGraphQL.Field(_type => UsersInConversationsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersInConversationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersInConversationsUpdateWithoutConversationInput, {
    nullable: false
  })
  update!: UsersInConversationsUpdateWithoutConversationInput;

  @TypeGraphQL.Field(_type => UsersInConversationsCreateWithoutConversationInput, {
    nullable: false
  })
  create!: UsersInConversationsCreateWithoutConversationInput;
}

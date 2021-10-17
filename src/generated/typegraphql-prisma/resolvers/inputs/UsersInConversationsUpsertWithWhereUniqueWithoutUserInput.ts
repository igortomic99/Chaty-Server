import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCreateWithoutUserInput } from "../inputs/UsersInConversationsCreateWithoutUserInput";
import { UsersInConversationsUpdateWithoutUserInput } from "../inputs/UsersInConversationsUpdateWithoutUserInput";
import { UsersInConversationsWhereUniqueInput } from "../inputs/UsersInConversationsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UsersInConversationsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersInConversationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersInConversationsUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UsersInConversationsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UsersInConversationsCreateWithoutUserInput, {
    nullable: false
  })
  create!: UsersInConversationsCreateWithoutUserInput;
}

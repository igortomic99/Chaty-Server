import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCreateWithoutUserInput } from "../inputs/UsersInConversationsCreateWithoutUserInput";
import { UsersInConversationsWhereUniqueInput } from "../inputs/UsersInConversationsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UsersInConversationsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersInConversationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersInConversationsCreateWithoutUserInput, {
    nullable: false
  })
  create!: UsersInConversationsCreateWithoutUserInput;
}

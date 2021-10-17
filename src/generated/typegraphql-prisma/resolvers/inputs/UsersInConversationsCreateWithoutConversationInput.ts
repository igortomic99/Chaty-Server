import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutConversationsInput } from "../inputs/UserCreateNestedOneWithoutConversationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsCreateWithoutConversationInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutConversationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutConversationsInput;
}

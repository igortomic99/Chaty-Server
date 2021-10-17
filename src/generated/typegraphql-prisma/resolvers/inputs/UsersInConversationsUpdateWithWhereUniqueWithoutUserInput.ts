import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsUpdateWithoutUserInput } from "../inputs/UsersInConversationsUpdateWithoutUserInput";
import { UsersInConversationsWhereUniqueInput } from "../inputs/UsersInConversationsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UsersInConversationsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersInConversationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersInConversationsUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UsersInConversationsUpdateWithoutUserInput;
}

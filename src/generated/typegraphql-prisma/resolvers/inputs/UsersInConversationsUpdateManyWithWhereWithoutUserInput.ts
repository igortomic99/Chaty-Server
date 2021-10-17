import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsScalarWhereInput } from "../inputs/UsersInConversationsScalarWhereInput";
import { UsersInConversationsUpdateManyMutationInput } from "../inputs/UsersInConversationsUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UsersInConversationsScalarWhereInput, {
    nullable: false
  })
  where!: UsersInConversationsScalarWhereInput;

  @TypeGraphQL.Field(_type => UsersInConversationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: UsersInConversationsUpdateManyMutationInput;
}

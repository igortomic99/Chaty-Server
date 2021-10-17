import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCreateManyUserInputEnvelope } from "../inputs/UsersInConversationsCreateManyUserInputEnvelope";
import { UsersInConversationsCreateOrConnectWithoutUserInput } from "../inputs/UsersInConversationsCreateOrConnectWithoutUserInput";
import { UsersInConversationsCreateWithoutUserInput } from "../inputs/UsersInConversationsCreateWithoutUserInput";
import { UsersInConversationsWhereUniqueInput } from "../inputs/UsersInConversationsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UsersInConversationsCreateWithoutUserInput], {
    nullable: true
  })
  create?: UsersInConversationsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UsersInConversationsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UsersInConversationsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsWhereUniqueInput], {
    nullable: true
  })
  connect?: UsersInConversationsWhereUniqueInput[] | undefined;
}

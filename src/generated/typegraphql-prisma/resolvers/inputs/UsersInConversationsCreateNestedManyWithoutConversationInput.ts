import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCreateManyConversationInputEnvelope } from "../inputs/UsersInConversationsCreateManyConversationInputEnvelope";
import { UsersInConversationsCreateOrConnectWithoutConversationInput } from "../inputs/UsersInConversationsCreateOrConnectWithoutConversationInput";
import { UsersInConversationsCreateWithoutConversationInput } from "../inputs/UsersInConversationsCreateWithoutConversationInput";
import { UsersInConversationsWhereUniqueInput } from "../inputs/UsersInConversationsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsCreateNestedManyWithoutConversationInput {
  @TypeGraphQL.Field(_type => [UsersInConversationsCreateWithoutConversationInput], {
    nullable: true
  })
  create?: UsersInConversationsCreateWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsCreateOrConnectWithoutConversationInput], {
    nullable: true
  })
  connectOrCreate?: UsersInConversationsCreateOrConnectWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsCreateManyConversationInputEnvelope, {
    nullable: true
  })
  createMany?: UsersInConversationsCreateManyConversationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsWhereUniqueInput], {
    nullable: true
  })
  connect?: UsersInConversationsWhereUniqueInput[] | undefined;
}

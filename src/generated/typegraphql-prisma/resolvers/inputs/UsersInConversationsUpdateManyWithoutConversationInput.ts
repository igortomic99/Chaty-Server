import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCreateManyConversationInputEnvelope } from "../inputs/UsersInConversationsCreateManyConversationInputEnvelope";
import { UsersInConversationsCreateOrConnectWithoutConversationInput } from "../inputs/UsersInConversationsCreateOrConnectWithoutConversationInput";
import { UsersInConversationsCreateWithoutConversationInput } from "../inputs/UsersInConversationsCreateWithoutConversationInput";
import { UsersInConversationsScalarWhereInput } from "../inputs/UsersInConversationsScalarWhereInput";
import { UsersInConversationsUpdateManyWithWhereWithoutConversationInput } from "../inputs/UsersInConversationsUpdateManyWithWhereWithoutConversationInput";
import { UsersInConversationsUpdateWithWhereUniqueWithoutConversationInput } from "../inputs/UsersInConversationsUpdateWithWhereUniqueWithoutConversationInput";
import { UsersInConversationsUpsertWithWhereUniqueWithoutConversationInput } from "../inputs/UsersInConversationsUpsertWithWhereUniqueWithoutConversationInput";
import { UsersInConversationsWhereUniqueInput } from "../inputs/UsersInConversationsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsUpdateManyWithoutConversationInput {
  @TypeGraphQL.Field(_type => [UsersInConversationsCreateWithoutConversationInput], {
    nullable: true
  })
  create?: UsersInConversationsCreateWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsCreateOrConnectWithoutConversationInput], {
    nullable: true
  })
  connectOrCreate?: UsersInConversationsCreateOrConnectWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsUpsertWithWhereUniqueWithoutConversationInput], {
    nullable: true
  })
  upsert?: UsersInConversationsUpsertWithWhereUniqueWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsCreateManyConversationInputEnvelope, {
    nullable: true
  })
  createMany?: UsersInConversationsCreateManyConversationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsWhereUniqueInput], {
    nullable: true
  })
  connect?: UsersInConversationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsWhereUniqueInput], {
    nullable: true
  })
  set?: UsersInConversationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UsersInConversationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsWhereUniqueInput], {
    nullable: true
  })
  delete?: UsersInConversationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsUpdateWithWhereUniqueWithoutConversationInput], {
    nullable: true
  })
  update?: UsersInConversationsUpdateWithWhereUniqueWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsUpdateManyWithWhereWithoutConversationInput], {
    nullable: true
  })
  updateMany?: UsersInConversationsUpdateManyWithWhereWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UsersInConversationsScalarWhereInput[] | undefined;
}

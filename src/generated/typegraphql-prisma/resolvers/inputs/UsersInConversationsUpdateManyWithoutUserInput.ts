import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCreateManyUserInputEnvelope } from "../inputs/UsersInConversationsCreateManyUserInputEnvelope";
import { UsersInConversationsCreateOrConnectWithoutUserInput } from "../inputs/UsersInConversationsCreateOrConnectWithoutUserInput";
import { UsersInConversationsCreateWithoutUserInput } from "../inputs/UsersInConversationsCreateWithoutUserInput";
import { UsersInConversationsScalarWhereInput } from "../inputs/UsersInConversationsScalarWhereInput";
import { UsersInConversationsUpdateManyWithWhereWithoutUserInput } from "../inputs/UsersInConversationsUpdateManyWithWhereWithoutUserInput";
import { UsersInConversationsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UsersInConversationsUpdateWithWhereUniqueWithoutUserInput";
import { UsersInConversationsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UsersInConversationsUpsertWithWhereUniqueWithoutUserInput";
import { UsersInConversationsWhereUniqueInput } from "../inputs/UsersInConversationsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UsersInConversationsCreateWithoutUserInput], {
    nullable: true
  })
  create?: UsersInConversationsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UsersInConversationsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UsersInConversationsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UsersInConversationsCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UsersInConversationsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UsersInConversationsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UsersInConversationsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UsersInConversationsScalarWhereInput[] | undefined;
}

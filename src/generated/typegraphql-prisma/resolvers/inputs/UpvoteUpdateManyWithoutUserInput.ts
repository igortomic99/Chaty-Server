import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteCreateManyUserInputEnvelope } from "../inputs/UpvoteCreateManyUserInputEnvelope";
import { UpvoteCreateOrConnectWithoutUserInput } from "../inputs/UpvoteCreateOrConnectWithoutUserInput";
import { UpvoteCreateWithoutUserInput } from "../inputs/UpvoteCreateWithoutUserInput";
import { UpvoteScalarWhereInput } from "../inputs/UpvoteScalarWhereInput";
import { UpvoteUpdateManyWithWhereWithoutUserInput } from "../inputs/UpvoteUpdateManyWithWhereWithoutUserInput";
import { UpvoteUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UpvoteUpdateWithWhereUniqueWithoutUserInput";
import { UpvoteUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UpvoteUpsertWithWhereUniqueWithoutUserInput";
import { UpvoteWhereUniqueInput } from "../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UpvoteCreateWithoutUserInput], {
    nullable: true
  })
  create?: UpvoteCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UpvoteCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UpvoteUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UpvoteCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UpvoteCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UpvoteWhereUniqueInput], {
    nullable: true
  })
  connect?: UpvoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteWhereUniqueInput], {
    nullable: true
  })
  set?: UpvoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UpvoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteWhereUniqueInput], {
    nullable: true
  })
  delete?: UpvoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UpvoteUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UpvoteUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UpvoteScalarWhereInput[] | undefined;
}

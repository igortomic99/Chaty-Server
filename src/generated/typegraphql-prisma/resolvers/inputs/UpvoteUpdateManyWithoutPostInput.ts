import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteCreateManyPostInputEnvelope } from "../inputs/UpvoteCreateManyPostInputEnvelope";
import { UpvoteCreateOrConnectWithoutPostInput } from "../inputs/UpvoteCreateOrConnectWithoutPostInput";
import { UpvoteCreateWithoutPostInput } from "../inputs/UpvoteCreateWithoutPostInput";
import { UpvoteScalarWhereInput } from "../inputs/UpvoteScalarWhereInput";
import { UpvoteUpdateManyWithWhereWithoutPostInput } from "../inputs/UpvoteUpdateManyWithWhereWithoutPostInput";
import { UpvoteUpdateWithWhereUniqueWithoutPostInput } from "../inputs/UpvoteUpdateWithWhereUniqueWithoutPostInput";
import { UpvoteUpsertWithWhereUniqueWithoutPostInput } from "../inputs/UpvoteUpsertWithWhereUniqueWithoutPostInput";
import { UpvoteWhereUniqueInput } from "../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [UpvoteCreateWithoutPostInput], {
    nullable: true
  })
  create?: UpvoteCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: UpvoteCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: UpvoteUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => UpvoteCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: UpvoteCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UpvoteUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: UpvoteUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: UpvoteUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UpvoteScalarWhereInput[] | undefined;
}

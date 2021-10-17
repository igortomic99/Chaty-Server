import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteCreateManyPostInputEnvelope } from "../inputs/UpvoteCreateManyPostInputEnvelope";
import { UpvoteCreateOrConnectWithoutPostInput } from "../inputs/UpvoteCreateOrConnectWithoutPostInput";
import { UpvoteCreateWithoutPostInput } from "../inputs/UpvoteCreateWithoutPostInput";
import { UpvoteWhereUniqueInput } from "../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [UpvoteCreateWithoutPostInput], {
    nullable: true
  })
  create?: UpvoteCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: UpvoteCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => UpvoteCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: UpvoteCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UpvoteWhereUniqueInput], {
    nullable: true
  })
  connect?: UpvoteWhereUniqueInput[] | undefined;
}

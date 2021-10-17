import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteCreateManyUserInputEnvelope } from "../inputs/UpvoteCreateManyUserInputEnvelope";
import { UpvoteCreateOrConnectWithoutUserInput } from "../inputs/UpvoteCreateOrConnectWithoutUserInput";
import { UpvoteCreateWithoutUserInput } from "../inputs/UpvoteCreateWithoutUserInput";
import { UpvoteWhereUniqueInput } from "../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UpvoteCreateWithoutUserInput], {
    nullable: true
  })
  create?: UpvoteCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UpvoteCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UpvoteCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UpvoteCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UpvoteWhereUniqueInput], {
    nullable: true
  })
  connect?: UpvoteWhereUniqueInput[] | undefined;
}

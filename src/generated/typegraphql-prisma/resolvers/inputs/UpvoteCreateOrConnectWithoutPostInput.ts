import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteCreateWithoutPostInput } from "../inputs/UpvoteCreateWithoutPostInput";
import { UpvoteWhereUniqueInput } from "../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => UpvoteWhereUniqueInput, {
    nullable: false
  })
  where!: UpvoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => UpvoteCreateWithoutPostInput, {
    nullable: false
  })
  create!: UpvoteCreateWithoutPostInput;
}

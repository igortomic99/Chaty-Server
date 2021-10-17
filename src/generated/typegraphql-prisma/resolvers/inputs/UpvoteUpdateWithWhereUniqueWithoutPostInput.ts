import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteUpdateWithoutPostInput } from "../inputs/UpvoteUpdateWithoutPostInput";
import { UpvoteWhereUniqueInput } from "../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => UpvoteWhereUniqueInput, {
    nullable: false
  })
  where!: UpvoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => UpvoteUpdateWithoutPostInput, {
    nullable: false
  })
  data!: UpvoteUpdateWithoutPostInput;
}

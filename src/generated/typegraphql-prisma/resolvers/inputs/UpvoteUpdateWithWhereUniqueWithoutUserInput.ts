import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteUpdateWithoutUserInput } from "../inputs/UpvoteUpdateWithoutUserInput";
import { UpvoteWhereUniqueInput } from "../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UpvoteWhereUniqueInput, {
    nullable: false
  })
  where!: UpvoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => UpvoteUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UpvoteUpdateWithoutUserInput;
}

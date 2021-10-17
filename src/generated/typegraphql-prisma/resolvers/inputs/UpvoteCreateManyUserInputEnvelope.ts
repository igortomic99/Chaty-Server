import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteCreateManyUserInput } from "../inputs/UpvoteCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UpvoteCreateManyUserInput], {
    nullable: false
  })
  data!: UpvoteCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

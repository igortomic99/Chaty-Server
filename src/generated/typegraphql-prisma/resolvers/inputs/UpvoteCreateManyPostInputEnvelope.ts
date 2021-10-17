import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteCreateManyPostInput } from "../inputs/UpvoteCreateManyPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [UpvoteCreateManyPostInput], {
    nullable: false
  })
  data!: UpvoteCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

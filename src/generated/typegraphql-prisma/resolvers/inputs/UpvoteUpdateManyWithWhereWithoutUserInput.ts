import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteScalarWhereInput } from "../inputs/UpvoteScalarWhereInput";
import { UpvoteUpdateManyMutationInput } from "../inputs/UpvoteUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UpvoteScalarWhereInput, {
    nullable: false
  })
  where!: UpvoteScalarWhereInput;

  @TypeGraphQL.Field(_type => UpvoteUpdateManyMutationInput, {
    nullable: false
  })
  data!: UpvoteUpdateManyMutationInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutUpvotesInput } from "../inputs/PostCreateNestedOneWithoutUpvotesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutUpvotesInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutUpvotesInput;
}

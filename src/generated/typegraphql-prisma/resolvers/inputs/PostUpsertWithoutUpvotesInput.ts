import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUpvotesInput } from "../inputs/PostCreateWithoutUpvotesInput";
import { PostUpdateWithoutUpvotesInput } from "../inputs/PostUpdateWithoutUpvotesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithoutUpvotesInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutUpvotesInput, {
    nullable: false
  })
  update!: PostUpdateWithoutUpvotesInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutUpvotesInput, {
    nullable: false
  })
  create!: PostCreateWithoutUpvotesInput;
}

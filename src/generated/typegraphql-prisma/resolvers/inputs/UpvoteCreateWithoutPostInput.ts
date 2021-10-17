import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutUpvotesInput } from "../inputs/UserCreateNestedOneWithoutUpvotesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutUpvotesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutUpvotesInput;
}

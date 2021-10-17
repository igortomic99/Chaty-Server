import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUpvotesInput } from "../inputs/UserCreateWithoutUpvotesInput";
import { UserUpdateWithoutUpvotesInput } from "../inputs/UserUpdateWithoutUpvotesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutUpvotesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutUpvotesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUpvotesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUpvotesInput, {
    nullable: false
  })
  create!: UserCreateWithoutUpvotesInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFollowedByInput } from "../inputs/UserCreateNestedOneWithoutFollowedByInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsCreateWithoutFollowingInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowedByInput, {
    nullable: false
  })
  follower!: UserCreateNestedOneWithoutFollowedByInput;
}

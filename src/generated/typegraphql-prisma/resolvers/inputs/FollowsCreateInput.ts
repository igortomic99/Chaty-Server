import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFollowedByInput } from "../inputs/UserCreateNestedOneWithoutFollowedByInput";
import { UserCreateNestedOneWithoutFollowingInput } from "../inputs/UserCreateNestedOneWithoutFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowedByInput, {
    nullable: false
  })
  follower!: UserCreateNestedOneWithoutFollowedByInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowingInput, {
    nullable: false
  })
  following!: UserCreateNestedOneWithoutFollowingInput;
}

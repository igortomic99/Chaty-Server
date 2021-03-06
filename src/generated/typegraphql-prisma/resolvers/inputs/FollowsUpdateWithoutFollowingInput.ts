import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutFollowedByInput } from "../inputs/UserUpdateOneRequiredWithoutFollowedByInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsUpdateWithoutFollowingInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowedByInput, {
    nullable: true
  })
  follower?: UserUpdateOneRequiredWithoutFollowedByInput | undefined;
}

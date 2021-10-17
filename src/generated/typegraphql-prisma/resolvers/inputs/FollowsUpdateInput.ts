import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutFollowedByInput } from "../inputs/UserUpdateOneRequiredWithoutFollowedByInput";
import { UserUpdateOneRequiredWithoutFollowingInput } from "../inputs/UserUpdateOneRequiredWithoutFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowedByInput, {
    nullable: true
  })
  follower?: UserUpdateOneRequiredWithoutFollowedByInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowingInput, {
    nullable: true
  })
  following?: UserUpdateOneRequiredWithoutFollowingInput | undefined;
}

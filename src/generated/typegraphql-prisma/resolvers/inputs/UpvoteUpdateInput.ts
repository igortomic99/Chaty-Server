import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutUpvotesInput } from "../inputs/PostUpdateOneRequiredWithoutUpvotesInput";
import { UserUpdateOneRequiredWithoutUpvotesInput } from "../inputs/UserUpdateOneRequiredWithoutUpvotesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutUpvotesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutUpvotesInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutUpvotesInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutUpvotesInput | undefined;
}

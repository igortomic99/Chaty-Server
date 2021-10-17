import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutUpvotesInput } from "../inputs/PostUpdateOneRequiredWithoutUpvotesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutUpvotesInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutUpvotesInput | undefined;
}

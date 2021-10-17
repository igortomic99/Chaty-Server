import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteUserIdPostIdCompoundUniqueInput } from "../inputs/UpvoteUserIdPostIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteWhereUniqueInput {
  @TypeGraphQL.Field(_type => UpvoteUserIdPostIdCompoundUniqueInput, {
    nullable: true
  })
  userId_postId?: UpvoteUserIdPostIdCompoundUniqueInput | undefined;
}

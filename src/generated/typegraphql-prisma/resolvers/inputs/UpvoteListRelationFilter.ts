import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteWhereInput } from "../inputs/UpvoteWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteListRelationFilter {
  @TypeGraphQL.Field(_type => UpvoteWhereInput, {
    nullable: true
  })
  every?: UpvoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => UpvoteWhereInput, {
    nullable: true
  })
  some?: UpvoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => UpvoteWhereInput, {
    nullable: true
  })
  none?: UpvoteWhereInput | undefined;
}

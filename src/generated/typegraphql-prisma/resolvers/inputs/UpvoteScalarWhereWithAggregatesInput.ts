import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UpvoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UpvoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UpvoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UpvoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  value?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  postId?: StringWithAggregatesFilter | undefined;
}

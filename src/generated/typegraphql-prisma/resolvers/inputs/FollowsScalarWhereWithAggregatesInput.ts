import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FollowsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FollowsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FollowsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FollowsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  followerId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  followingId?: StringWithAggregatesFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteAvgOrderByAggregateInput } from "../inputs/UpvoteAvgOrderByAggregateInput";
import { UpvoteCountOrderByAggregateInput } from "../inputs/UpvoteCountOrderByAggregateInput";
import { UpvoteMaxOrderByAggregateInput } from "../inputs/UpvoteMaxOrderByAggregateInput";
import { UpvoteMinOrderByAggregateInput } from "../inputs/UpvoteMinOrderByAggregateInput";
import { UpvoteSumOrderByAggregateInput } from "../inputs/UpvoteSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UpvoteCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UpvoteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UpvoteAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UpvoteAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UpvoteMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UpvoteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UpvoteMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UpvoteMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UpvoteSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UpvoteSumOrderByAggregateInput | undefined;
}

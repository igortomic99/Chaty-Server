import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAvgOrderByAggregateInput } from "../inputs/MessageAvgOrderByAggregateInput";
import { MessageCountOrderByAggregateInput } from "../inputs/MessageCountOrderByAggregateInput";
import { MessageMaxOrderByAggregateInput } from "../inputs/MessageMaxOrderByAggregateInput";
import { MessageMinOrderByAggregateInput } from "../inputs/MessageMinOrderByAggregateInput";
import { MessageSumOrderByAggregateInput } from "../inputs/MessageSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  text?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  conversationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  read?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MessageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MessageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MessageAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MessageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MessageMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MessageSumOrderByAggregateInput | undefined;
}

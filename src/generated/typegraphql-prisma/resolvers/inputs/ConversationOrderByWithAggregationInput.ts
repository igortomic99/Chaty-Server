import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationCountOrderByAggregateInput } from "../inputs/ConversationCountOrderByAggregateInput";
import { ConversationMaxOrderByAggregateInput } from "../inputs/ConversationMaxOrderByAggregateInput";
import { ConversationMinOrderByAggregateInput } from "../inputs/ConversationMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConversationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ConversationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ConversationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConversationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ConversationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConversationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ConversationMinOrderByAggregateInput | undefined;
}

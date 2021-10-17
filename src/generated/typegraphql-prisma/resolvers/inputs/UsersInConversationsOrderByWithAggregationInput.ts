import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCountOrderByAggregateInput } from "../inputs/UsersInConversationsCountOrderByAggregateInput";
import { UsersInConversationsMaxOrderByAggregateInput } from "../inputs/UsersInConversationsMaxOrderByAggregateInput";
import { UsersInConversationsMinOrderByAggregateInput } from "../inputs/UsersInConversationsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  conversationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UsersInConversationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UsersInConversationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UsersInConversationsMinOrderByAggregateInput | undefined;
}

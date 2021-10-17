import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UsersInConversationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UsersInConversationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UsersInConversationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UsersInConversationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  conversationId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}

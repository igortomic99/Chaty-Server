import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationRelationFilter } from "../inputs/ConversationRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsWhereInput {
  @TypeGraphQL.Field(_type => [UsersInConversationsWhereInput], {
    nullable: true
  })
  AND?: UsersInConversationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsWhereInput], {
    nullable: true
  })
  OR?: UsersInConversationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsWhereInput], {
    nullable: true
  })
  NOT?: UsersInConversationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => ConversationRelationFilter, {
    nullable: true
  })
  conversation?: ConversationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  conversationId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}

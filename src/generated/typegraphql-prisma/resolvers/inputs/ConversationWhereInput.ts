import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsersInConversationsListRelationFilter } from "../inputs/UsersInConversationsListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConversationWhereInput {
  @TypeGraphQL.Field(_type => [ConversationWhereInput], {
    nullable: true
  })
  AND?: ConversationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConversationWhereInput], {
    nullable: true
  })
  OR?: ConversationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConversationWhereInput], {
    nullable: true
  })
  NOT?: ConversationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsListRelationFilter, {
    nullable: true
  })
  participants?: UsersInConversationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MessageListRelationFilter, {
    nullable: true
  })
  messages?: MessageListRelationFilter | undefined;
}

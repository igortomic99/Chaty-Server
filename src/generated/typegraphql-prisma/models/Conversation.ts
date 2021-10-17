import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Message } from "../models/Message";
import { UsersInConversations } from "../models/UsersInConversations";
import { ConversationCount } from "../resolvers/outputs/ConversationCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Conversation {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  participants?: UsersInConversations[];

  messages?: Message[];

  @TypeGraphQL.Field(_type => ConversationCount, {
    nullable: true
  })
  _count?: ConversationCount | null;
}

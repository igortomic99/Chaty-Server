import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Conversation } from "../models/Conversation";
import { User } from "../../../types/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UsersInConversations {
  conversation?: Conversation;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  conversationId!: string;

  @TypeGraphQL.Field(_type => User, {
    nullable: true
  })
  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}

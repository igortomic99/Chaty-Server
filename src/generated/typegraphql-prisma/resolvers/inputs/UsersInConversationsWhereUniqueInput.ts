import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsUserIdConversationIdCompoundUniqueInput } from "../inputs/UsersInConversationsUserIdConversationIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsWhereUniqueInput {
  @TypeGraphQL.Field(_type => UsersInConversationsUserIdConversationIdCompoundUniqueInput, {
    nullable: true
  })
  userId_conversationId?: UsersInConversationsUserIdConversationIdCompoundUniqueInput | undefined;
}

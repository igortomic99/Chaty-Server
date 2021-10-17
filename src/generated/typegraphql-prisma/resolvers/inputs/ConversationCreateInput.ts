import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateNestedManyWithoutConversationInput } from "../inputs/MessageCreateNestedManyWithoutConversationInput";
import { UsersInConversationsCreateNestedManyWithoutConversationInput } from "../inputs/UsersInConversationsCreateNestedManyWithoutConversationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConversationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => UsersInConversationsCreateNestedManyWithoutConversationInput, {
    nullable: true
  })
  participants?: UsersInConversationsCreateNestedManyWithoutConversationInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutConversationInput, {
    nullable: true
  })
  messages?: MessageCreateNestedManyWithoutConversationInput | undefined;
}

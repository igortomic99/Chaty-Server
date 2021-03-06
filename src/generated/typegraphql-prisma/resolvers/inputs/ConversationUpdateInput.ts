import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutConversationInput } from "../inputs/MessageUpdateManyWithoutConversationInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsersInConversationsUpdateManyWithoutConversationInput } from "../inputs/UsersInConversationsUpdateManyWithoutConversationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConversationUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsUpdateManyWithoutConversationInput, {
    nullable: true
  })
  participants?: UsersInConversationsUpdateManyWithoutConversationInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutConversationInput, {
    nullable: true
  })
  messages?: MessageUpdateManyWithoutConversationInput | undefined;
}

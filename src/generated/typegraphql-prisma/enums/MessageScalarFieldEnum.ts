import * as TypeGraphQL from "type-graphql";

export enum MessageScalarFieldEnum {
  id = "id",
  text = "text",
  createdAt = "createdAt",
  userId = "userId",
  conversationId = "conversationId",
  read = "read"
}
TypeGraphQL.registerEnumType(MessageScalarFieldEnum, {
  name: "MessageScalarFieldEnum",
  description: undefined,
});

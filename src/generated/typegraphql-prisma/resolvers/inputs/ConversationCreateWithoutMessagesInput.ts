import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCreateNestedManyWithoutConversationInput } from "../inputs/UsersInConversationsCreateNestedManyWithoutConversationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConversationCreateWithoutMessagesInput {
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
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationCreateNestedOneWithoutMessagesInput } from "../inputs/ConversationCreateNestedOneWithoutMessagesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  read?: boolean | undefined;

  @TypeGraphQL.Field(_type => ConversationCreateNestedOneWithoutMessagesInput, {
    nullable: false
  })
  conversation!: ConversationCreateNestedOneWithoutMessagesInput;
}

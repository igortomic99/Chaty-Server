import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutMessageInput } from "../inputs/UserCreateNestedOneWithoutMessageInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateWithoutConversationInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMessageInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutMessageInput;
}

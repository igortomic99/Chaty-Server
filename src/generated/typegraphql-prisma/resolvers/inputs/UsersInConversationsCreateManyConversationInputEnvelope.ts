import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCreateManyConversationInput } from "../inputs/UsersInConversationsCreateManyConversationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsCreateManyConversationInputEnvelope {
  @TypeGraphQL.Field(_type => [UsersInConversationsCreateManyConversationInput], {
    nullable: false
  })
  data!: UsersInConversationsCreateManyConversationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

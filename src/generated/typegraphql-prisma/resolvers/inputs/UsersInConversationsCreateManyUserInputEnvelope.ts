import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCreateManyUserInput } from "../inputs/UsersInConversationsCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UsersInConversationsCreateManyUserInput], {
    nullable: false
  })
  data!: UsersInConversationsCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

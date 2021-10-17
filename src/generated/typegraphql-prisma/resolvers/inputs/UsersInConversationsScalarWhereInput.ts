import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsScalarWhereInput {
  @TypeGraphQL.Field(_type => [UsersInConversationsScalarWhereInput], {
    nullable: true
  })
  AND?: UsersInConversationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsScalarWhereInput], {
    nullable: true
  })
  OR?: UsersInConversationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersInConversationsScalarWhereInput], {
    nullable: true
  })
  NOT?: UsersInConversationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  conversationId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsWhereInput } from "../inputs/UsersInConversationsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersInConversationsListRelationFilter {
  @TypeGraphQL.Field(_type => UsersInConversationsWhereInput, {
    nullable: true
  })
  every?: UsersInConversationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsWhereInput, {
    nullable: true
  })
  some?: UsersInConversationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsWhereInput, {
    nullable: true
  })
  none?: UsersInConversationsWhereInput | undefined;
}

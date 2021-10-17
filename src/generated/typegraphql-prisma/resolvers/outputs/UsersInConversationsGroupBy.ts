import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersInConversationsCountAggregate } from "../outputs/UsersInConversationsCountAggregate";
import { UsersInConversationsMaxAggregate } from "../outputs/UsersInConversationsMaxAggregate";
import { UsersInConversationsMinAggregate } from "../outputs/UsersInConversationsMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UsersInConversationsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  conversationId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => UsersInConversationsCountAggregate, {
    nullable: true
  })
  _count!: UsersInConversationsCountAggregate | null;

  @TypeGraphQL.Field(_type => UsersInConversationsMinAggregate, {
    nullable: true
  })
  _min!: UsersInConversationsMinAggregate | null;

  @TypeGraphQL.Field(_type => UsersInConversationsMaxAggregate, {
    nullable: true
  })
  _max!: UsersInConversationsMaxAggregate | null;
}

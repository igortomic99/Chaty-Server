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
export class AggregateUsersInConversations {
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

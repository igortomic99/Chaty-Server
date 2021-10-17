import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationCountAggregate } from "../outputs/ConversationCountAggregate";
import { ConversationMaxAggregate } from "../outputs/ConversationMaxAggregate";
import { ConversationMinAggregate } from "../outputs/ConversationMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ConversationGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => ConversationCountAggregate, {
    nullable: true
  })
  _count!: ConversationCountAggregate | null;

  @TypeGraphQL.Field(_type => ConversationMinAggregate, {
    nullable: true
  })
  _min!: ConversationMinAggregate | null;

  @TypeGraphQL.Field(_type => ConversationMaxAggregate, {
    nullable: true
  })
  _max!: ConversationMaxAggregate | null;
}

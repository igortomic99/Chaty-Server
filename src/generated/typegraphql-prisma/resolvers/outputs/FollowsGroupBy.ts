import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsCountAggregate } from "../outputs/FollowsCountAggregate";
import { FollowsMaxAggregate } from "../outputs/FollowsMaxAggregate";
import { FollowsMinAggregate } from "../outputs/FollowsMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class FollowsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  followerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  followingId!: string;

  @TypeGraphQL.Field(_type => FollowsCountAggregate, {
    nullable: true
  })
  _count!: FollowsCountAggregate | null;

  @TypeGraphQL.Field(_type => FollowsMinAggregate, {
    nullable: true
  })
  _min!: FollowsMinAggregate | null;

  @TypeGraphQL.Field(_type => FollowsMaxAggregate, {
    nullable: true
  })
  _max!: FollowsMaxAggregate | null;
}

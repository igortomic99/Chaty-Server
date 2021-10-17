import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteAvgAggregate } from "../outputs/UpvoteAvgAggregate";
import { UpvoteCountAggregate } from "../outputs/UpvoteCountAggregate";
import { UpvoteMaxAggregate } from "../outputs/UpvoteMaxAggregate";
import { UpvoteMinAggregate } from "../outputs/UpvoteMinAggregate";
import { UpvoteSumAggregate } from "../outputs/UpvoteSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UpvoteGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;

  @TypeGraphQL.Field(_type => UpvoteCountAggregate, {
    nullable: true
  })
  _count!: UpvoteCountAggregate | null;

  @TypeGraphQL.Field(_type => UpvoteAvgAggregate, {
    nullable: true
  })
  _avg!: UpvoteAvgAggregate | null;

  @TypeGraphQL.Field(_type => UpvoteSumAggregate, {
    nullable: true
  })
  _sum!: UpvoteSumAggregate | null;

  @TypeGraphQL.Field(_type => UpvoteMinAggregate, {
    nullable: true
  })
  _min!: UpvoteMinAggregate | null;

  @TypeGraphQL.Field(_type => UpvoteMaxAggregate, {
    nullable: true
  })
  _max!: UpvoteMaxAggregate | null;
}

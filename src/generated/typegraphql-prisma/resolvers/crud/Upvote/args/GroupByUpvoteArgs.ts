import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UpvoteOrderByWithAggregationInput } from "../../../inputs/UpvoteOrderByWithAggregationInput";
import { UpvoteScalarWhereWithAggregatesInput } from "../../../inputs/UpvoteScalarWhereWithAggregatesInput";
import { UpvoteWhereInput } from "../../../inputs/UpvoteWhereInput";
import { UpvoteScalarFieldEnum } from "../../../../enums/UpvoteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUpvoteArgs {
  @TypeGraphQL.Field(_type => UpvoteWhereInput, {
    nullable: true
  })
  where?: UpvoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UpvoteOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UpvoteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"value" | "userId" | "postId">;

  @TypeGraphQL.Field(_type => UpvoteScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UpvoteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

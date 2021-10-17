import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UpvoteCreateInput } from "../../../inputs/UpvoteCreateInput";
import { UpvoteUpdateInput } from "../../../inputs/UpvoteUpdateInput";
import { UpvoteWhereUniqueInput } from "../../../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUpvoteArgs {
  @TypeGraphQL.Field(_type => UpvoteWhereUniqueInput, {
    nullable: false
  })
  where!: UpvoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => UpvoteCreateInput, {
    nullable: false
  })
  create!: UpvoteCreateInput;

  @TypeGraphQL.Field(_type => UpvoteUpdateInput, {
    nullable: false
  })
  update!: UpvoteUpdateInput;
}

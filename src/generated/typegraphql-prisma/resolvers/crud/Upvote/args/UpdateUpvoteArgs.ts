import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UpvoteUpdateInput } from "../../../inputs/UpvoteUpdateInput";
import { UpvoteWhereUniqueInput } from "../../../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUpvoteArgs {
  @TypeGraphQL.Field(_type => UpvoteUpdateInput, {
    nullable: false
  })
  data!: UpvoteUpdateInput;

  @TypeGraphQL.Field(_type => UpvoteWhereUniqueInput, {
    nullable: false
  })
  where!: UpvoteWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UpvoteCreateInput } from "../../../inputs/UpvoteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUpvoteArgs {
  @TypeGraphQL.Field(_type => UpvoteCreateInput, {
    nullable: false
  })
  data!: UpvoteCreateInput;
}

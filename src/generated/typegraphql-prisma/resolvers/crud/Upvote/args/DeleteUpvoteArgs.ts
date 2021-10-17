import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UpvoteWhereUniqueInput } from "../../../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUpvoteArgs {
  @TypeGraphQL.Field(_type => UpvoteWhereUniqueInput, {
    nullable: false
  })
  where!: UpvoteWhereUniqueInput;
}

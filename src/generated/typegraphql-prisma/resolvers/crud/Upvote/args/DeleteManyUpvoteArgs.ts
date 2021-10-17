import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UpvoteWhereInput } from "../../../inputs/UpvoteWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUpvoteArgs {
  @TypeGraphQL.Field(_type => UpvoteWhereInput, {
    nullable: true
  })
  where?: UpvoteWhereInput | undefined;
}

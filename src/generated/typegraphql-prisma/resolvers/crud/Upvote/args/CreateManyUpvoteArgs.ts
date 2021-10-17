import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UpvoteCreateManyInput } from "../../../inputs/UpvoteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUpvoteArgs {
  @TypeGraphQL.Field(_type => [UpvoteCreateManyInput], {
    nullable: false
  })
  data!: UpvoteCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

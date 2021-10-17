import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UpvoteUpdateManyMutationInput } from "../../../inputs/UpvoteUpdateManyMutationInput";
import { UpvoteWhereInput } from "../../../inputs/UpvoteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUpvoteArgs {
  @TypeGraphQL.Field(_type => UpvoteUpdateManyMutationInput, {
    nullable: false
  })
  data!: UpvoteUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UpvoteWhereInput, {
    nullable: true
  })
  where?: UpvoteWhereInput | undefined;
}

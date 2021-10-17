import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UpvoteCreateWithoutUserInput } from "../inputs/UpvoteCreateWithoutUserInput";
import { UpvoteWhereUniqueInput } from "../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UpvoteWhereUniqueInput, {
    nullable: false
  })
  where!: UpvoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => UpvoteCreateWithoutUserInput, {
    nullable: false
  })
  create!: UpvoteCreateWithoutUserInput;
}

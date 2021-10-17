import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UpvoteScalarWhereInput {
  @TypeGraphQL.Field(_type => [UpvoteScalarWhereInput], {
    nullable: true
  })
  AND?: UpvoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteScalarWhereInput], {
    nullable: true
  })
  OR?: UpvoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UpvoteScalarWhereInput], {
    nullable: true
  })
  NOT?: UpvoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  value?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  postId?: StringFilter | undefined;
}

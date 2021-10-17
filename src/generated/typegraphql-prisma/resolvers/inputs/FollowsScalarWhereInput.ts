import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsScalarWhereInput {
  @TypeGraphQL.Field(_type => [FollowsScalarWhereInput], {
    nullable: true
  })
  AND?: FollowsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsScalarWhereInput], {
    nullable: true
  })
  OR?: FollowsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsScalarWhereInput], {
    nullable: true
  })
  NOT?: FollowsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  followerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  followingId?: StringFilter | undefined;
}

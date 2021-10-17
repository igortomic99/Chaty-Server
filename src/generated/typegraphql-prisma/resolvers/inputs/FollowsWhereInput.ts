import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsWhereInput {
  @TypeGraphQL.Field(_type => [FollowsWhereInput], {
    nullable: true
  })
  AND?: FollowsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsWhereInput], {
    nullable: true
  })
  OR?: FollowsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsWhereInput], {
    nullable: true
  })
  NOT?: FollowsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  follower?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  followerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  following?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  followingId?: StringFilter | undefined;
}

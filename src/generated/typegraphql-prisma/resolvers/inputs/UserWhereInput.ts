import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsListRelationFilter } from "../inputs/FollowsListRelationFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ProfileRelationFilter } from "../inputs/ProfileRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UpvoteListRelationFilter } from "../inputs/UpvoteListRelationFilter";
import { UsersInConversationsListRelationFilter } from "../inputs/UsersInConversationsListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsListRelationFilter, {
    nullable: true
  })
  conversations?: UsersInConversationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MessageListRelationFilter, {
    nullable: true
  })
  Message?: MessageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProfileRelationFilter, {
    nullable: true
  })
  profile?: ProfileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UpvoteListRelationFilter, {
    nullable: true
  })
  upvotes?: UpvoteListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowsListRelationFilter, {
    nullable: true
  })
  followedBy?: FollowsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowsListRelationFilter, {
    nullable: true
  })
  following?: FollowsListRelationFilter | undefined;
}

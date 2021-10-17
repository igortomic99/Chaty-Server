import * as TypeGraphQL from "type-graphql";

export enum FollowsScalarFieldEnum {
  followerId = "followerId",
  followingId = "followingId"
}
TypeGraphQL.registerEnumType(FollowsScalarFieldEnum, {
  name: "FollowsScalarFieldEnum",
  description: undefined,
});

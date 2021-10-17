import * as TypeGraphQL from "type-graphql";

export enum UpvoteScalarFieldEnum {
  value = "value",
  userId = "userId",
  postId = "postId"
}
TypeGraphQL.registerEnumType(UpvoteScalarFieldEnum, {
  name: "UpvoteScalarFieldEnum",
  description: undefined,
});

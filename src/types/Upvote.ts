import { ObjectType, Field, Int } from "type-graphql";
import { Post } from "./Post";
import { User } from "./User";

@ObjectType()
export class Upvote {
  @Field((_type) => Int, {
    nullable: false,
  })
  value!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  postId!: string;

  user?: User;

  post?: Post;
}

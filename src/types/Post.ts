import { User } from "./User";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export class Post {
  @Field()
  id!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @Field((_type) => Date)
  updatedAt!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @Field((_type) => String, {
    nullable: true,
  })
  content?: string | null;

  @Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @Field((_type) => User, {
    nullable: false,
  })
  author?: User;

  @Field((_type) => Int, {
    nullable: false,
  })
  points!: number;

  @Field(() => Int, { nullable: true })
  voteStatus: number | null;
}

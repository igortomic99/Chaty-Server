import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Follower {
  @Field()
  id!: string;

  @Field()
  username!: string;
}

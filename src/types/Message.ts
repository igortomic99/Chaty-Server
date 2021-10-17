import { ObjectType, Field } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Message {
  @Field()
  id!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  text!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @Field((_type) => String)
  userId!: string;

  @Field((_type) => String)
  conversationId!: string;

  @Field((_type) => User, {
    nullable: false,
  })
  author?: User;

  @Field((_type) => Boolean, {
    nullable: false,
  })
  read!: boolean;
}

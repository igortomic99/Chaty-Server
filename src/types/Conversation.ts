import { __Type } from "graphql";
import { ObjectType, Field } from "type-graphql";
import { Message } from "./Message";
import { UsersInConversations } from "../generated/typegraphql-prisma/models/UsersInConversations";

@ObjectType()
export class Conversation {
  @Field()
  id!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @Field(() => [Message], { nullable: true })
  messages?: Message[];

  @Field(() => [UsersInConversations])
  participants?: UsersInConversations[];
}

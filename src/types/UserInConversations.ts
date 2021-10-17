import { User } from "src/generated/typegraphql-prisma";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class UsersInConversations {
  @Field((_type) => String, {
    nullable: false,
  })
  conversationId!: string;

  @Field((_type) => User)
  user: User;

  @Field((_type) => String, {
    nullable: false,
  })
  userId!: string;
}

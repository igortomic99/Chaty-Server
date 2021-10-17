import { Profile } from "./Profile";
import { ObjectType, Field } from "type-graphql";
import {
  Follows,
  UserCount,
  UsersInConversations,
} from "../generated/typegraphql-prisma";
import { Post } from "./Post";

@ObjectType()
export class User {
  @Field()
  id!: string;

  @Field()
  email!: string;

  @Field()
  username!: string;

  @Field(() => Profile, { nullable: true })
  profile?: Profile;

  @Field(() => [UsersInConversations])
  conversations?: UsersInConversations[];

  @Field(() => [Post])
  posts?: Post[];

  @Field(() => UserCount, {
    nullable: true,
  })
  _count?: UserCount | null;

  following?: Follows[];
}

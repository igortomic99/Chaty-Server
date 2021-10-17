import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Follows } from "../models/Follows";
import { Message } from "../models/Message";
import { Post } from "../models/Post";
import { Profile } from "../models/Profile";
import { Upvote } from "../models/Upvote";
import { UsersInConversations } from "../models/UsersInConversations";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  conversations?: UsersInConversations[];

  Message?: Message[];

  posts?: Post[];

  profile?: Profile | null;

  upvotes?: Upvote[];

  followedBy?: Follows[];

  following?: Follows[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Follows {
  follower?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  followerId!: string;

  following?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  followingId!: string;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsCreateNestedManyWithoutFollowerInput } from "../inputs/FollowsCreateNestedManyWithoutFollowerInput";
import { FollowsCreateNestedManyWithoutFollowingInput } from "../inputs/FollowsCreateNestedManyWithoutFollowingInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
import { UpvoteCreateNestedManyWithoutUserInput } from "../inputs/UpvoteCreateNestedManyWithoutUserInput";
import { UsersInConversationsCreateNestedManyWithoutUserInput } from "../inputs/UsersInConversationsCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutMessageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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

  @TypeGraphQL.Field(_type => UsersInConversationsCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  conversations?: UsersInConversationsCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  profile?: ProfileCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UpvoteCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  upvotes?: UpvoteCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FollowsCreateNestedManyWithoutFollowerInput, {
    nullable: true
  })
  followedBy?: FollowsCreateNestedManyWithoutFollowerInput | undefined;

  @TypeGraphQL.Field(_type => FollowsCreateNestedManyWithoutFollowingInput, {
    nullable: true
  })
  following?: FollowsCreateNestedManyWithoutFollowingInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsOrderByRelationAggregateInput } from "../inputs/FollowsOrderByRelationAggregateInput";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ProfileOrderByWithRelationInput } from "../inputs/ProfileOrderByWithRelationInput";
import { UpvoteOrderByRelationAggregateInput } from "../inputs/UpvoteOrderByRelationAggregateInput";
import { UsersInConversationsOrderByRelationAggregateInput } from "../inputs/UsersInConversationsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UsersInConversationsOrderByRelationAggregateInput, {
    nullable: true
  })
  conversations?: UsersInConversationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageOrderByRelationAggregateInput, {
    nullable: true
  })
  Message?: MessageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput, {
    nullable: true
  })
  posts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfileOrderByWithRelationInput, {
    nullable: true
  })
  profile?: ProfileOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UpvoteOrderByRelationAggregateInput, {
    nullable: true
  })
  upvotes?: UpvoteOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowsOrderByRelationAggregateInput, {
    nullable: true
  })
  followedBy?: FollowsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowsOrderByRelationAggregateInput, {
    nullable: true
  })
  following?: FollowsOrderByRelationAggregateInput | undefined;
}

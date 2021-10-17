import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutUpvotesInput } from "../inputs/PostCreateOrConnectWithoutUpvotesInput";
import { PostCreateWithoutUpvotesInput } from "../inputs/PostCreateWithoutUpvotesInput";
import { PostUpdateWithoutUpvotesInput } from "../inputs/PostUpdateWithoutUpvotesInput";
import { PostUpsertWithoutUpvotesInput } from "../inputs/PostUpsertWithoutUpvotesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateOneRequiredWithoutUpvotesInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutUpvotesInput, {
    nullable: true
  })
  create?: PostCreateWithoutUpvotesInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutUpvotesInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUpvotesInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutUpvotesInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutUpvotesInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutUpvotesInput, {
    nullable: true
  })
  update?: PostUpdateWithoutUpvotesInput | undefined;
}

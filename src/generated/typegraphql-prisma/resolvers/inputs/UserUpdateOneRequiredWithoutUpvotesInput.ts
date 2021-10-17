import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUpvotesInput } from "../inputs/UserCreateOrConnectWithoutUpvotesInput";
import { UserCreateWithoutUpvotesInput } from "../inputs/UserCreateWithoutUpvotesInput";
import { UserUpdateWithoutUpvotesInput } from "../inputs/UserUpdateWithoutUpvotesInput";
import { UserUpsertWithoutUpvotesInput } from "../inputs/UserUpsertWithoutUpvotesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutUpvotesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUpvotesInput, {
    nullable: true
  })
  create?: UserCreateWithoutUpvotesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUpvotesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUpvotesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutUpvotesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutUpvotesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUpvotesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutUpvotesInput | undefined;
}

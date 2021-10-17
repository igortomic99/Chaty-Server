import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowedByInput } from "../inputs/UserCreateOrConnectWithoutFollowedByInput";
import { UserCreateWithoutFollowedByInput } from "../inputs/UserCreateWithoutFollowedByInput";
import { UserUpdateWithoutFollowedByInput } from "../inputs/UserUpdateWithoutFollowedByInput";
import { UserUpsertWithoutFollowedByInput } from "../inputs/UserUpsertWithoutFollowedByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutFollowedByInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFollowedByInput, {
    nullable: true
  })
  create?: UserCreateWithoutFollowedByInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFollowedByInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFollowedByInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFollowedByInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowedByInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFollowedByInput | undefined;
}

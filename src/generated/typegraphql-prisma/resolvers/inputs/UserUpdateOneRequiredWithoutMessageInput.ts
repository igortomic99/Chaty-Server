import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMessageInput } from "../inputs/UserCreateOrConnectWithoutMessageInput";
import { UserCreateWithoutMessageInput } from "../inputs/UserCreateWithoutMessageInput";
import { UserUpdateWithoutMessageInput } from "../inputs/UserUpdateWithoutMessageInput";
import { UserUpsertWithoutMessageInput } from "../inputs/UserUpsertWithoutMessageInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutMessageInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMessageInput, {
    nullable: true
  })
  create?: UserCreateWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMessageInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutMessageInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMessageInput, {
    nullable: true
  })
  update?: UserUpdateWithoutMessageInput | undefined;
}

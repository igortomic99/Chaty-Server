import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMessageInput } from "../inputs/UserCreateOrConnectWithoutMessageInput";
import { UserCreateWithoutMessageInput } from "../inputs/UserCreateWithoutMessageInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutMessageInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMessageInput, {
    nullable: true
  })
  create?: UserCreateWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMessageInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

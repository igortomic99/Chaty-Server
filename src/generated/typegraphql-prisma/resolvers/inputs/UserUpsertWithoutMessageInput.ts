import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMessageInput } from "../inputs/UserCreateWithoutMessageInput";
import { UserUpdateWithoutMessageInput } from "../inputs/UserUpdateWithoutMessageInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutMessageInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutMessageInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMessageInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMessageInput, {
    nullable: false
  })
  create!: UserCreateWithoutMessageInput;
}

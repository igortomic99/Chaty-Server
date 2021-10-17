import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersInConversationsCreateManyInput } from "../../../inputs/UsersInConversationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUsersInConversationsArgs {
  @TypeGraphQL.Field(_type => [UsersInConversationsCreateManyInput], {
    nullable: false
  })
  data!: UsersInConversationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

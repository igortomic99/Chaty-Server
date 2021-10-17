import * as TypeGraphQL from "type-graphql";
import { Conversation } from "../../../models/Conversation";
import { User } from "../../../models/User";
import { UsersInConversations } from "../../../models/UsersInConversations";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsersInConversations)
export class UsersInConversationsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Conversation, {
    nullable: false
  })
  async conversation(@TypeGraphQL.Root() usersInConversations: UsersInConversations, @TypeGraphQL.Ctx() ctx: any): Promise<Conversation> {
    return getPrismaFromContext(ctx).usersInConversations.findUnique({
      where: {
        userId_conversationId: {
          userId: usersInConversations.userId,
          conversationId: usersInConversations.conversationId,
        },
      },
    }).conversation({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() usersInConversations: UsersInConversations, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).usersInConversations.findUnique({
      where: {
        userId_conversationId: {
          userId: usersInConversations.userId,
          conversationId: usersInConversations.conversationId,
        },
      },
    }).user({});
  }
}

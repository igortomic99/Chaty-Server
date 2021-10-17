import { PrismaClient } from "@prisma/client";
import { Conversation } from "../types/Conversation";
import { MyContext } from "src/types/types";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { UsersInConversations } from "../generated/typegraphql-prisma";
import { isAuth } from "../middleware/isAuth";

const prisma = new PrismaClient();

@Resolver()
export class ConversationResolver {
  @Mutation(() => Conversation)
  @UseMiddleware(isAuth)
  async createConversation(): Promise<Conversation> {
    const conversation = await prisma.conversation.create({
      data: {
        createdAt: new Date(),
      },
      include: {
        participants: true,
      },
    });
    if (!conversation) {
      throw new Error("Cannot create conversation");
    }
    return conversation;
  }

  @Mutation(() => UsersInConversations)
  async assingConversation(
    @Ctx() { req }: MyContext,
    @Arg("id") id: string
  ): Promise<UsersInConversations> {
    const userId = req.session.userId;
    if (!userId) {
      throw new Error("Not authenticated");
    }
    const first = await prisma.usersInConversations.findMany({
      where: {
        userId: id,
      },
    });
    let second;
    for (const f of first) {
      second = await prisma.usersInConversations.findUnique({
        where: {
          userId_conversationId: {
            userId,
            conversationId: f.conversationId,
          },
        },
      });
    }
    if (second === null || second === undefined) {
      const conversation = await prisma.conversation.create({
        data: {
          createdAt: new Date(),
        },
      });
      const result = await prisma.usersInConversations.create({
        data: {
          conversationId: conversation.id,
          userId,
        },
      });
      if (!result) {
        throw new Error("Cannot be created");
      }
      const resultSecond = await prisma.usersInConversations.create({
        data: {
          conversationId: conversation.id,
          userId: id,
        },
      });
      if (!conversation) {
        throw new Error("Cannot be created");
      }
      return resultSecond;
    }
    if (!first) {
      throw new Error("Cannot create conversation");
    }
    if (!second) {
      throw new Error("Cannot create conversation");
    }
    return second;
  }

  @Query(() => Conversation)
  async conversationFromId(@Arg("id") id: string) {
    const conversation = await prisma.conversation.findUnique({
      where: {
        id,
      },
      include: {
        messages: {
          include: {
            author: true,
          },
        },
        participants: true,
      },
    });
    return conversation;
  }

  @Query(() => [Conversation])
  async participantsFromConversationId(
    @Arg("id", () => [String]) id: string[]
  ) {
    let conversations = [];
    let conversation;
    for (const i of id) {
      conversation = await prisma.conversation.findUnique({
        where: {
          id: i,
        },
        include: {
          participants: {
            select: {
              user: true,
            },
          },
        },
      });
      conversations.push(conversation);
    }
    return conversations;
  }

  @Query(() => Conversation)
  async participants(@Arg("id") id: string) {
    const conversations = await prisma.conversation.findMany({
      where: {
        id,
      },
      include: {
        participants: true,
      },
    });
    return conversations;
  }
}

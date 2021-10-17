import { PrismaClient } from "@prisma/client";
import { PubSubEngine } from "graphql-subscriptions";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "src/types/types";
import {
  Arg,
  Ctx,
  Mutation,
  PubSub,
  Query,
  Resolver,
  Root,
  Subscription,
  UseMiddleware,
} from "type-graphql";
import { Message } from "../types/Message";

const prisma = new PrismaClient();
const messages: Message[] = [];
const channel = "MESSAGE_CHANNEL";

@Resolver()
export class MessageResolver {
  @Mutation(() => Message)
  @UseMiddleware(isAuth)
  async sendMessage(
    @Arg("text", () => String) text: string,
    @Arg("conversationId", () => String) conversationId: string,
    @PubSub() pubSub: PubSubEngine,
    @Ctx() { req }: MyContext
  ): Promise<Message> {
    const userId = req.session.userId;
    if (!userId) {
      throw new Error("Not authenticated");
    }
    const conversation = await prisma.usersInConversations.findUnique({
      where: {
        userId_conversationId: {
          conversationId,
          userId,
        },
      },
    });
    if (!conversation) {
      throw new Error("User is not in conversation");
    }
    const message = await prisma.message.create({
      data: {
        text: text,
        createdAt: new Date(),
        userId: userId,
        conversationId: conversationId,
      },
    });
    if (!message) {
      throw new Error("Cant create message");
    }
    messages.push(message);
    const payload = message;
    await pubSub.publish(channel, payload);
    return message;
  }

  @Query(() => [Message])
  @UseMiddleware(isAuth)
  async messagesInConversation(@Arg("id", () => String) id: string) {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: id,
      },
      include: {
        author: true,
      },
    });
    if (!messages) {
      throw new Error("conversation does not exist");
    }
    return messages;
  }

  @Subscription(() => Message, { topics: channel })
  async messageSent(@PubSub() pubSub: PubSubEngine, @Root() { id }: Message) {
    pubSub.asyncIterator(channel);
    const message = await prisma.message.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    });
    return message;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async readMessage(@Arg("id", () => String) id: string) {
    const messages = await prisma.message.updateMany({
      where: {
        conversationId: id,
      },
      data: {
        read: true,
      },
    });
    if (!messages) {
      throw new Error("Conversation does not exist");
    }
    return true;
  }
}

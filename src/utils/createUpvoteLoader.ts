import { Upvote } from "../types/Upvote";
import DataLoader from 'dataloader';
import {PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();
// [{postId: 5, userId: 10}]
// [{postId: 5, userId: 10, value: 1}]
export const createUpvoteLoader = () =>
  new DataLoader<{ postId: string; userId: string }, Upvote | null>(
    async (keys) => {
      const upvotes = await prisma.upvote.findMany()
      const upvoteIdsToUpvote: Record<string, Upvote> = {};
      upvotes.forEach((upvote)=> {
        upvoteIdsToUpvote[`${upvote.userId}|${upvote.postId}`] = upvote;
      });
      return keys.map(
        (key: { userId: any; postId: any; }) => upvoteIdsToUpvote[`${key.userId}|${key.postId}`]
      );
    }
  );
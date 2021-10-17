import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";
import { createUpvoteLoader } from "../utils/createUpvoteLoader";

export type MyContext = {
  req: Request & {
    session: Session & Partial<SessionData> & { userId?: string };
  };
  redis: Redis;
  res: Response;
  upvoteLoader: ReturnType<typeof createUpvoteLoader>;
};

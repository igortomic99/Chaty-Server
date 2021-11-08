import { PrismaClient } from "@prisma/client";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import http from "http";
import Redis from "ioredis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { COOKIE_NAME, __prod__ } from "./constants";
import { ConversationResolver } from "./resolvers/conversation";
import { MessageResolver } from "./resolvers/message";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import { createUpvoteLoader } from "./utils/createUpvoteLoader";

const prisma = new PrismaClient();

const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      MessageResolver,
      ConversationResolver,
      PostResolver,
    ],
    validate: false,
  });
  const app = express();
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    subscriptions: {
      path: "/subscriptions",
    },
    plugins: [
      //ApolloServerPluginLandingPageGraphQLPlayground(),
      /*{
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },*/
    ],
    context: ({ req, res }) => ({
      req,
      res,
      upvoteLoader: createUpvoteLoader(),
    }),
  });

  const httpServer = http.createServer(app);

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  /*const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe,
    async onConnect(
      connectionParams: Object,
      webSocket: WebSocket
    ){}
  },
    { server: httpServer, path: apolloServer.graphqlPath }
  );*/
  apolloServer.installSubscriptionHandlers(httpServer);

  const RedisStore = connectRedis(session);
  const redis = new Redis();
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      saveUninitialized: false,
      secret: "rewrqwerqewrqwrqvvsdabhdfer",
      resave: false,
    })
  );
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  const server = httpServer.listen(4000, () => {
    console.log("server started on http://localhost:4000/");
    /*const wsServer = new ws.Server({
      server,
      path: '/subscriptions',
    });
    useServer({ schema }, wsServer);*/
  });
};

main()
  .catch((err) => {
    console.log("Error: ", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

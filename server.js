import express from "express";
import { ApolloServer } from "apollo-server-express";
import connectMongo from "./db/db.js";
import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";
import { checkAuth } from "./passport/authenticate.js";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    const conn = await connectMongo();
    if (conn) {
      console.log("Connected successfully.");
    }

    const server = new ApolloServer({
      typeDefs: schemas,
      resolvers,
      context: async ({ req, res }) => {
        try {
          const user = await checkAuth(req, res);
          return {
            req,
            res,
            user,
          };
        } catch (error) {
          console.log(`Context error: ${error.message}`);
        }
      },
    });
    const app = express();
    server.applyMiddleware({ app });
    /* server.applyMiddleware({ app, path: "/graphql" });*/

    process.env.NODE_ENV = process.env.NODE_ENV || "development";
    if (process.env.NODE_ENV === "production") {
      console.log("prduction");
      const { default: production } = await import("./sec/production.js");
      production(app, 3000);
    } else {
      console.log("localhost");
      const { default: localhost } = await import("./sec/localhost.js");
      localhost(app, 8000, 3000);
    }

    /* app.listen({ port: 3000 }, () =>
      console.log(
        `🚀 Server ready at http://localhost:3000${server.graphqlPath}`
      )
    );*/
  } catch (e) {
    console.log("server error: " + e.message);
  }
})();

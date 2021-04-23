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
    app.listen({ port: 3000 }, () =>
      console.log(
        `🚀 Server ready at http://localhost:3000${server.graphqlPath}`
      )
    );
  } catch (e) {
    console.log("server error: " + e.message);
  }
})();

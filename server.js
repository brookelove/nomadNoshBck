import express, { urlencoded, json } from "express";
import { join } from "path";
// Import the ApolloServer class
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { authMiddleware } from "./utils/auth";

// Import the two parts of a GraphQL schema
import { typeDefs, resolvers } from "./schemas";
import db from "./config/connection";

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(urlencoded({ extended: false }));
  app.use(json());

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(join(__dirname, "../client/dist/index.html"));
    });
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`🚀API server running on port ${PORT}🚀`);
      console.log(`🚀Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();

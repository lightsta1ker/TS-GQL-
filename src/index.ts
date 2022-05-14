import express, { Application } from "express";
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from "./graphql/index";
import { connectDatabase } from "./database";
import { Database } from "./lib/types";

const app: Application = express();
const port = 9000;


app.listen(port, () => {
  console.log(`[app] : http://localhost:${port}`);
});


async function startserver(){

  const db = await connectDatabase();
  const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ db }) });

  await server.start();
  server.applyMiddleware({app, path: '/api'})

  const listings = await db.listings.find({}).toArray();
  console.log(listings);
}


startserver();





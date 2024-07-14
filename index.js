import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './src/GraphQL/TypeDefs.js';
import resolvers from './src/GraphQL/Resolver.js';
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"
dotenv.config();


const App = express();

// Database Connection
const mongoConnect = process.env.MONGO_DB_URL;
mongoose.connect(mongoConnect)
    .then(() => {
        console.log("Database is Connected");
    })
    .catch((err) => {
        console.error(" Database Connection error: ", err);
    });

// Creating Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});


// Middleware to check for JWT token
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
      } catch (err) {
        console.error('Invalid token', err);
      }
    }
    next();
  };

App.use(authMiddleware);

// Server Connection 
const port = process.env.PORT;
const { url } = await startStandaloneServer(server, {
    listen: { port: port || 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
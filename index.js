import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './src/GraphQL/TypeDefs.js';
import resolvers from './src/GraphQL/Resolver.js';
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

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

// Server Connection 
const port = process.env.PORT;
const { url } = await startStandaloneServer(server, {
    listen: { port: port || 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
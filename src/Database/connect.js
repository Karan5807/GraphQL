import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const connect_Url = process.env.MONGO_DB;

mongoose.connect(connect_Url)
    .then(() => {
        console.log("Connected to MongoDB Atlas!");
    })
    .catch((err) => {
        console.error("Connection error: ", err);
    });


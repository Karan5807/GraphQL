import mongoose from "mongoose";
const connect_Url = "mongodb+srv://karancommunicate:ZwmLGOMGaoo5A496@cluster0.h2vqkas.mongodb.net/";

mongoose.connect(connect_Url)
    .then(() => {
        console.log("Connected to MongoDB Atlas!");
    })
    .catch((err) => {
        console.error("Connection error: ", err);
    });


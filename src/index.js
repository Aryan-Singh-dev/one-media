// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectToDatabase from "./db/index.js";

dotenv.config({ 
    path: "./.env"
});

connectToDatabase();









// ;(async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//  }   catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error
//     }
// }) () 


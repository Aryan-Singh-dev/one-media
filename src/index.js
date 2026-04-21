// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectToDatabase from "./db/index.js";

dotenv.config({ 
    path: "./.env"
});

connectToDatabase()
.then(()=> {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code, this is a native node.js method to terminate the process. read more: https://nodejs.org/api/process.html#process_exit_code
})









// ;(async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//  }   catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error
//     }
// }) () 


import mongoose from "mongoose";
import {DB_URI} from "./env.js"


if (!DB_URI) throw new Error("Check if you set your mongoo key correctly");


export const connectDb = async() => {
    try {

        await mongoose.connect(DB_URI);
        console.log("DB connected successfully");
        
    } catch (error) {
        console.log("error connecting to DB:", error)
        process.exit(1); 
    }
}


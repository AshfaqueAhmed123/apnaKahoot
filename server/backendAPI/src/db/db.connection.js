import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {db_name} from "../constants.js"

export const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI;
    try {
        const connectionInstance = await mongoose.connect(
            `${MONGO_URI}/${db_name}`
        );
        if(connectionInstance){
            console.log("DB connected!");
        }
    } catch (error) {
        return error?.message || "something went wrong while connecting to database."
    }
}
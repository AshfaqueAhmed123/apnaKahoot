import connectDB from "./API/db/connection.db.js";
import dotenv from "dotenv"
dotenv.config();

connectDB(
    process.env.DB_URI,
    process.env.DB_NAME
).then(()=>{

}).catch((error)=>{
    
})
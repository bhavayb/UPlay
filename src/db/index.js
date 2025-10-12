import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async()=>{
    try{
        const connectionInstance  = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("\n MongoDB connected successfully !! DB host: ", connectionInstance.connection.host); // konse host pe connec tho rhe h
    }catch(error){
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process with failure
    }
}

export default connectDB;
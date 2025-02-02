import mongoose from "mongoose";
import  config  from "config";
import logger from "./logger";

export default async function connectionToDB(){
    try{
        const URL = config.get<string>("mongooseURL")
        if(!URL) throw new Error("Cannot find connection string")
        await mongoose.connect(URL)
        logger.info("Connected to the database.")
    }catch(error:unknown){
        if(error instanceof Error) throw new Error(`While connecting to DB:${error.message}`)
        else throw new Error("Something went wrong while connecting to database.")
    }
}
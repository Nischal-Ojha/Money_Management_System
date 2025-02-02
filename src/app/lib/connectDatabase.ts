import mongoose from "mongoose";

export default async function connection(){
    const mongoURL = process.env.MongooseURL || ""
    if(mongoURL=== "") throw new Error("No Connection string for Database connection") 
    try{
        if (mongoose.connection.readyState >= 1) {
            console.log("Using existing MongoDB connection...");
            return;
        }
        await mongoose.connect(mongoURL);
        console.log("Connected to MongoDB");
    }catch(error){
        if(error instanceof Error) throw new Error(error.message)
        else throw new Error("Something went wrong while connecting to Database")
    }
}
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{type:String, require:true, unique:true},
    contact:{type:String, require:true, unique:true},
    type:{type:String, require:true},
    password:{type:String, require:false}
},{
    timestamps:true
})

export type UserType ={
    name:string;
    contact:string;
    type:string;
    password?:string
}

export interface UserDocument extends UserType, mongoose.Document{
    createdAt:Date,
    updatedAt:Date
}

const User = mongoose.model("User", userSchema)

export default User
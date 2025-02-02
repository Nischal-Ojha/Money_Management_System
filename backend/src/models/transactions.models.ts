import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    transactionType:{type:String, require:true},
    amount:{type:String, require:true},
    details:{type:String, require:true},
    accountType:{type:String, require:true},
    userName:{type:String}
},{
    timestamps:true
})

export type transactionInput= {
    transactionType:string;
    amount:number;
    details:string;
    accountType:string;
    userName?:string
}

export interface transactionDocumnet extends transactionInput, mongoose.Document{
    createdAt:Date;
    updatedAt:Date;
}

const Transaction = mongoose.model("Transaction", transactionSchema)

export default Transaction
import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema({
    transactionType:{type:String, require:true},
    amount:{type:Number, require:true},
    details:{type:String, require:true},
    accountType:{type:String, require:true},
    userName:{type:String}
},{
    timestamps:true
})

interface transactionSchemaType extends Document{
    transactionType:string;
    amount:number;
    details:string;
    accountType:string;
    userName:string;
    timestamps:Date;
}

const Transaction = mongoose.models.Transaction ||mongoose.model<transactionSchemaType>("Transaction", transactionSchema)

export default Transaction
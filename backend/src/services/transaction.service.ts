import Transaction, { transactionInput } from "../models/transactions.models";

export const createTransaction = async(transactionData:transactionInput)=>{
    try{
        const transaction = await Transaction.create(transactionData)
        return transaction
    }catch(error:unknown){
        if(error instanceof Error) throw new Error(`In services:${error.message}`)
        else throw new Error("Something went wrong in services.")
    }
}

export const transactionToday = async(start:Date, end:Date)=>{
    try{
        const transactionNow = await Transaction.find({createdAt:{$gte:start, $lt:end}})
        return transactionNow
    }catch(error:unknown){
        if(error instanceof Error) throw new Error(`In services:${error.message}`)
        else throw new Error("Something went wrong in services.")
    }
}
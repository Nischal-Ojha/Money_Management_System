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
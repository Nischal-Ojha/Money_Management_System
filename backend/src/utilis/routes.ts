import { Express } from "express";
import Transaction from "../models/transactions.models";
import logger from "./logger";
import validate from "../middleware/validate";
import { createTransactionSchema } from "../schema/createTransaction.schema";
import { createTransactionHandler } from "../controller/transaction.controller";

const routes=(app:Express)=>{
    app.get("/api/transactionHistory", async(req, res)=>{
        try{
            logger.info("Getting Datas from Database")
            const datas = await Transaction.find()
            res.send(datas)
            logger.info("Successfully Extracted Datas from Database")
        }catch(error:unknown){
            if(error instanceof Error) throw new Error(`Error in TransactionHistory:${error.message}`)
            else throw new Error("Something went wrong whle getting data from database.")
        }
    })

    app.post("/api/newTransaction", validate(createTransactionSchema), createTransactionHandler)
}

export default routes
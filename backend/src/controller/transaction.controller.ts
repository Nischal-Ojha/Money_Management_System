import {Request, Response} from "express"
import { createTransactionSchemaType } from "../schema/transaction.schema"
import { createTransaction } from "../services/transaction.service"
import logger from "../utilis/logger"

export const createTransactionHandler= async (req:Request<unknown, unknown, createTransactionSchemaType["body"]>, res:Response) => {
    logger.info("Inside of createTransaction in handler")
    try{
        const input = req.body
        const createdTransaction = await createTransaction(input)
        res.status(201).send(createdTransaction)
    }catch(error:unknown){
        if(error instanceof Error){
            res.status(400).send(error.message)
        }
        else res.status(400).send("Something went wrong")
    }
}



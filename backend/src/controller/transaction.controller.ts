import {Request, Response} from "express"
import { createTransactionSchemaType } from "../schema/transaction.schema"
import { createTransaction, transactionToday } from "../services/transaction.service"
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


export const getTransactionTodayHandler = async (req:Request, res:Response)=>{
    logger.info("Transaction today Handler")
    try{
        const today = new Date()
        const start = new Date(today.setHours(0,0,0,0))
        const end = new Date(today.setHours(23,59,59,59))
        logger.info(start)
        const transactionHandler = await transactionToday(start, end)
        res.send(transactionHandler)
    }catch(error:unknown){
        if(error instanceof Error){
            res.status(400).send(error.message)
        }
        else res.status(400).send("Something went wrong")
    }
}


import {Request, Response} from "express"
import { createTransactionSchemaType } from "../schema/createTransaction.schema"
import { createTransaction } from "../services/createTransaction.service"
import logger from "../utilis/logger"

export const createTransactionHandler= async (req:Request<unknown, unknown, createTransactionSchemaType["body"]>, res:Response) => {
    logger.info("Inside of try in handler")
    try{
        const input = req.body
        const createdUser = await createTransaction(input)
        res.status(201).send(createdUser)
    }catch(error:unknown){
        if(error instanceof Error){
            res.status(400).send(error.message)
        }
        else res.status(400).send("Something went wrong")
    }
}


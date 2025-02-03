import { Express } from "express";
import Transaction from "../models/transactions.models";
import logger from "./logger";
import validate from "../middleware/validate";
import { createTransactionSchema } from "../schema/transaction.schema";
import { createTransactionHandler } from "../controller/transaction.controller";
import { createUserHandler, getUserHandler} from "../controller/user.controller";
import { createUserSchema } from "../schema/user.schema";
import User  from "../models/users.models";

const routes=(app:Express)=>{
    logger.info("Inside routes")
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

    app.get("/api/users", getUserHandler)

    app.post("/api/users", validate(createUserSchema), createUserHandler)

    app.get("/", (req, res)=>{logger.info("hello world"); res.send("Hello Users")})

}

export default routes
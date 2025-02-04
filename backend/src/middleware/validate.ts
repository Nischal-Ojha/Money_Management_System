import { Request, Response, NextFunction} from "express";
import { AnyZodObject} from "zod";
import logger from "../utilis/logger";

const validate=(schema:AnyZodObject)=>(req:Request, res:Response, next:NextFunction)=>{
    logger.info(`Inside validate:${req.body.amount}`)
    try{
        schema.parse({
            body:req.body,
            params:req.params,
            query:req.query
        })
        logger.info("Validated")
        next()
    }catch(error:unknown){
        if(error instanceof Error) res.status(400).send(error.message)
        else res.status(400).send("Something went wrong while validating")
    }
}

export default validate
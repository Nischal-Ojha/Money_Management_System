import { Request, Response } from "express";
import { createUser, getUsers } from "../services/user.service";
import { createUserSchemaType } from "../schema/user.schema";
import logger from "../utilis/logger";


export const getUserHandler= async(req:Request, res:Response)=>{
    try{
        const gotUsers = await getUsers()
        logger.info(gotUsers)
        res.send(gotUsers)
    }catch(error :unknown){
        if(error instanceof Error) res.status(400).send(`In handler:${error.message}`)
        else res.status(400).send("Something went wrong while getting users.")
    }
}

export const createUserHandler= async(req:Request<unknown, unknown, createUserSchemaType["body"]>, res:Response)=>{
    try{
        const input = req.body
        logger.info(input)
        const createdUser =await createUser(input)
        res.status(201).send(createdUser)
    }catch(error :unknown){
        if(error instanceof Error) res.status(400).send(`In handler:${error.message}`)
        else res.status(400).send("Something went wrong while getting users.")
    }
}
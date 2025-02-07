import { Request, Response } from "express";
import { createUser, getUsers } from "../services/user.service";
import { createUserSchemaType } from "../schema/user.schema";
import logger from "../utilis/logger";


export const getUserHandler= async(req:Request, res:Response)=>{
    try{
        const gotUsers = await getUsers()
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
        else res.status(400).send("Something went wrong while creating users.")
    }
}


export const loggedUserHandler = async(req: Request, res:Response)=>{
    try{
        const u_id = req.body._id
        logger.info(u_id)
        res.status(201).send(req.body)
    }catch(error){
        if(error instanceof Error) throw new Error(`In handle:${error.message}`)
        else throw new Error("Something went wrong while getting logged user.")
    }
}
import User, { UserType } from "../models/users.models"
import config from "config"
import logger from "../utilis/logger"
import bcrypt from "bcrypt"

export const getUsers= async()=>{
    try{
        const foundUsers = User.find()
        return foundUsers
    }catch(error:unknown){
        if(error instanceof Error) throw new Error(`In Servies:${error.message}`)
        else throw new Error("Something went wrong in services while getting users.")
    }
}

export const createUser = async(data:UserType)=>{
    try{
        if(data.type==="self"){
            const password = data.password || ""
            const salt = await bcrypt.genSalt(config.get<number>("saltFactor"))
            logger.info(`Inside Services:${data.password}`)
            const hash = await bcrypt.hash(password, salt)
            data.password = hash
        }
        const user = await User.create(data)
        return user
    }catch(error:unknown){
        if(error instanceof Error) throw new Error(`In Servies:${error.message}`)
        else throw new Error("Something went wrong in services while getting users.")
    }
}
import { z, TypeOf } from "zod";



export const loginUserSchema = z.object({
    body:z.object({
        name:z.string({required_error:"Name is required"}),
        type:z.string({required_error:"Type of User is required"}),
        contact:z.string({required_error:"Contact is required"}),
        password:z.string().optional()
    }).refine(data=>!(data.type==="self" && !data.password), {message:"password is required", path:["password"]})
})

export const createUserSchema = z.object({
    body:z.object({
        name:z.string({required_error:"Name is required"}),
        type:z.string({required_error:"Type of User is required"}),
        contact:z.string({required_error:"Contact is required"}),
        password:z.string().optional(),
        confirmPassword:z.string().optional()
    }).refine(data=>!(data.type==="self" && !data.password), {message:"password is required", path:["password"]})
    .refine(data=>!(data.password&&!data.confirmPassword), {message:"Confirm Password is requried", path:["confirmPassword"]})
    .refine(data=>data.password===data.confirmPassword, {message:"Passwords donot match", path:["confirmPassword"]})
})

export type createUserSchemaType =TypeOf<typeof createUserSchema>  
export type loginUserSchemaType =TypeOf<typeof loginUserSchema>  
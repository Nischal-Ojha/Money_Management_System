import { z, TypeOf } from "zod";

export const createUserSchema = z.object({
    body:z.object({
        name:z.string({required_error:"Name is required"}),
        type:z.string({required_error:"Type of User is required"}),
        contact:z.string({required_error:"Contact is required"}),
        password:z.string().optional()
    }).refine(data=>!(data.type==="self" && !data.password), {message:"password is required", path:["password"]})
})

export type createUserSchemaType =TypeOf<typeof createUserSchema>  
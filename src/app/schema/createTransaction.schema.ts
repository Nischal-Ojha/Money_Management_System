import {z,  TypeOf} from "zod"

export const createTransactionSchema =z.object({
    body : z.object({
        transactionType:z.string({required_error: "Transaction type is required"}),
        amount:z.number({required_error:"Amount is required"}),
        accountType:z.string({required_error:"Account Type is required"}),
        details:z.string({required_error:"Details is required"}),
        userName:z.string(),
    }).refine((data)=>data.transactionType==="Lent"|| data.transactionType==="Borrow" && !data.userName, {message:"User Name is required", path:["userName"]})
})

export type createTransactionSchemaType = TypeOf<typeof createTransactionSchema>

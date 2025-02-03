import {z, TypeOf} from "zod"


export const createTransactionSchema= z.object({
    body:z.object({
        transactionType:z.string({required_error:"Transaction Type is required"}),
        amount:z.number({required_error:"Amount is required"}),
        details:z.string({required_error:"Details is required"}),
        userName:z.string().min(3, "Must be at least 3 characters").optional(),
        accountType:z.string({required_error:"Account type is required"})
    }).refine((data) => {
        if ((data.transactionType === "Lent" || data.transactionType === "Borrow") && !data.userName) return false;
        return true;
      }, {message: "userName is required when transactionType is 'Lent' or 'Borrow'",path: ["userName"] })
})

export type createTransactionSchemaType = TypeOf<typeof createTransactionSchema>
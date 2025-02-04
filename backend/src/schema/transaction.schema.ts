import {z, TypeOf} from "zod"


export const createTransactionSchema= z.object({
    body:z.object({
        transactionType:z.string({required_error:"Transaction Type is required"}),
        amount:z.number({required_error:"Amount is required"}),
        details:z.string({required_error:"Details is required"}),
        userName:z.string().optional(),
        accountType:z.string({required_error:"Account type is required"})
    }).refine((data) => {
        if ((["Lent", "Borrow", "Payed", "Received"]).includes(data.transactionType) && !data.userName) return false;
        return true;
      }, {message: "userName is required when transactionType is 'Lent' or 'Borrow'",path: ["userName"] })
})

export type createTransactionSchemaType = TypeOf<typeof createTransactionSchema>
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionSchema = void 0;
const zod_1 = require("zod");
exports.createTransactionSchema = zod_1.z.object({
    body: zod_1.z.object({
        transactionType: zod_1.z.string({ required_error: "Transaction Type is required" }),
        amount: zod_1.z.number({ required_error: "Amount is required" }),
        details: zod_1.z.string({ required_error: "Details is required" }),
        userName: zod_1.z.string().min(3, "Must be at least 3 characters").optional(),
        accountType: zod_1.z.string({ required_error: "Account type is required" })
    }).refine((data) => {
        if ((data.transactionType === "Lent" || data.transactionType === "Borrow") && !data.userName)
            return false;
        return true;
    }, { message: "userName is required when transactionType is 'Lent' or 'Borrow'", path: ["userName"] })
});

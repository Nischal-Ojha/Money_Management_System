"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transactionSchema = new mongoose_1.default.Schema({
    transactionType: { type: String, require: true },
    amount: { type: String, require: true },
    details: { type: String, require: true },
    accountType: { type: String, require: true },
    userName: { type: String }
}, {
    timestamps: true
});
const Transaction = mongoose_1.default.model("Transaction", transactionSchema);
exports.default = Transaction;

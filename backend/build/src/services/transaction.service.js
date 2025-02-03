"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransaction = void 0;
const transactions_models_1 = __importDefault(require("../models/transactions.models"));
const createTransaction = (transactionData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield transactions_models_1.default.create(transactionData);
        return transaction;
    }
    catch (error) {
        if (error instanceof Error)
            throw new Error(`In services:${error.message}`);
        else
            throw new Error("Something went wrong in services.");
    }
});
exports.createTransaction = createTransaction;

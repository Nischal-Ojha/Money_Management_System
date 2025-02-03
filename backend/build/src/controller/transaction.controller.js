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
exports.createTransactionHandler = void 0;
const transaction_service_1 = require("../services/transaction.service");
const logger_1 = __importDefault(require("../utilis/logger"));
const createTransactionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info("Inside of createTransaction in handler");
    try {
        const input = req.body;
        const createdTransaction = yield (0, transaction_service_1.createTransaction)(input);
        res.status(201).send(createdTransaction);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        }
        else
            res.status(400).send("Something went wrong");
    }
});
exports.createTransactionHandler = createTransactionHandler;

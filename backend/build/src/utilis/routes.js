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
const transactions_models_1 = __importDefault(require("../models/transactions.models"));
const logger_1 = __importDefault(require("./logger"));
const validate_1 = __importDefault(require("../middleware/validate"));
const transaction_schema_1 = require("../schema/transaction.schema");
const transaction_controller_1 = require("../controller/transaction.controller");
const user_controller_1 = require("../controller/user.controller");
const user_schema_1 = require("../schema/user.schema");
const routes = (app) => {
    app.get("/api/transactionHistory", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            logger_1.default.info("Getting Datas from Database");
            const datas = yield transactions_models_1.default.find();
            res.send(datas);
            logger_1.default.info("Successfully Extracted Datas from Database");
        }
        catch (error) {
            if (error instanceof Error)
                throw new Error(`Error in TransactionHistory:${error.message}`);
            else
                throw new Error("Something went wrong whle getting data from database.");
        }
    }));
    app.post("/api/newTransaction", (0, validate_1.default)(transaction_schema_1.createTransactionSchema), transaction_controller_1.createTransactionHandler);
    app.get("/api/users", user_controller_1.getUserHandler);
    app.post("/api/users", (0, validate_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
    app.get("/", (req, res) => { res.send("Hello Users"); });
};
exports.default = routes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utilis/logger"));
const validate = (schema) => (req, res, next) => {
    logger_1.default.info(`Inside validate:${req.body.transactionType}`);
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        });
        logger_1.default.info("Validated");
        next();
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).send(error.message);
        else
            res.status(400).send("Something went wrong while validating");
    }
};
exports.default = validate;

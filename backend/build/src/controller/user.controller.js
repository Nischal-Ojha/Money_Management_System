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
exports.createUserHandler = exports.getUserHandler = void 0;
const user_service_1 = require("../services/user.service");
const logger_1 = __importDefault(require("../utilis/logger"));
const getUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gotUsers = yield (0, user_service_1.getUsers)();
        logger_1.default.info(gotUsers);
        res.send(gotUsers);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).send(`In handler:${error.message}`);
        else
            res.status(400).send("Something went wrong while getting users.");
    }
});
exports.getUserHandler = getUserHandler;
const createUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const input = req.body;
        logger_1.default.info(input);
        const createdUser = yield (0, user_service_1.createUser)(input);
        res.status(201).send(createdUser);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).send(`In handler:${error.message}`);
        else
            res.status(400).send("Something went wrong while getting users.");
    }
});
exports.createUserHandler = createUserHandler;

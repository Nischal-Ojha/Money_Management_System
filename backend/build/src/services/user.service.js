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
exports.createUser = exports.getUsers = void 0;
const users_models_1 = __importDefault(require("../models/users.models"));
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("../utilis/logger"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundUsers = users_models_1.default.find();
        return foundUsers;
    }
    catch (error) {
        if (error instanceof Error)
            throw new Error(`In Servies:${error.message}`);
        else
            throw new Error("Something went wrong in services while getting users.");
    }
});
exports.getUsers = getUsers;
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (data.type === "self") {
            const password = data.password || "";
            const salt = yield bcrypt_1.default.genSalt(config_1.default.get("saltFactor"));
            logger_1.default.info(`Inside Services:${data.password}`);
            const hash = yield bcrypt_1.default.hash(password, salt);
            data.password = hash;
        }
        const user = yield users_models_1.default.create(data);
        return user;
    }
    catch (error) {
        if (error instanceof Error)
            throw new Error(`In Servies:${error.message}`);
        else
            throw new Error("Something went wrong in services while getting users.");
    }
});
exports.createUser = createUser;

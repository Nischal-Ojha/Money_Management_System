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
exports.default = connectionToDB;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("./logger"));
function connectionToDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const URL = config_1.default.get("mongooseURL");
            if (!URL)
                throw new Error("Cannot find connection string");
            yield mongoose_1.default.connect(URL);
            logger_1.default.info("Connected to the database.");
        }
        catch (error) {
            if (error instanceof Error)
                throw new Error(`While connecting to DB:${error.message}`);
            else
                throw new Error("Something went wrong while connecting to database.");
        }
    });
}

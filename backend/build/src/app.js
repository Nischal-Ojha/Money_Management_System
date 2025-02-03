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
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const routes_1 = __importDefault(require("./utilis/routes"));
const logger_1 = __importDefault(require("./utilis/logger"));
const connect_1 = __importDefault(require("./utilis/connect"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = config_1.default.get("port");
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(`Listening to the port:${port}`);
    yield (0, connect_1.default)();
    (0, routes_1.default)(app);
}));

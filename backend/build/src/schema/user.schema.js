"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        type: zod_1.z.string({ required_error: "Type of User is required" }),
        contact: zod_1.z.string({ required_error: "Contact is required" }),
        password: zod_1.z.string().optional()
    }).refine(data => !(data.type === "self" && !data.password), { message: "password is required", path: ["password"] })
});

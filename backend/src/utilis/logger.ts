import pino, { LoggerOptions } from "pino";
import dayjs from "dayjs";

const logger = pino({
    transport:{
        "target":"pino-pretty",
        "options":{
            "colorize":"true"
        }
    },
    base:{
        "pid":false
    },
    timestamp:()=>`, "time":"${dayjs().format("hh:mm:ss A")}"`
} as LoggerOptions)

export default logger
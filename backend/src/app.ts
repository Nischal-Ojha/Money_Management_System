import express from "express";
import config from "config"
import routes from "./utilis/routes";
import logger from "./utilis/logger";
import connectionToDB from "./utilis/connect";


const app = express()
app.use(express.json())

const port = process.env.port ||config.get("port")

app.listen(port, async()=>{
    logger.info(`Listening to the port:${port}`)
    await connectionToDB()
    routes(app)
})
import express from "express";
import config from "config"
import routes from "./utilis/routes";
import logger from "./utilis/logger";
import connectionToDB from "./utilis/connect";
import cors from "cors"

const app = express()
// const allowedOrigins = [
//     'https://money-management-system-qr4p.vercel.app',
//   ];
  
  // app.use(
  //   cors({
  //     origin: allowedOrigins,
  //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include needed methods
  //     allowedHeaders: ['Content-Type', 'Authorization'], // Include needed headers
  //     credentials: true, // Enable if using cookies/auth headers
  //   })
  // );


  app.use(cors())
  
app.use(express.json())

const port = process.env.port ||config.get("port")

app.listen(port, async()=>{
    logger.info(`Listening to the port:${port}`)
    await connectionToDB()
    routes(app)
})
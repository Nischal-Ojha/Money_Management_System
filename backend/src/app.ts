import express from "express";
import config from "config"
import routes from "./utilis/routes";


const app = express()
app.use(express.json())

const port = config.get("port")

app.listen(port, ()=>{
    console.log("Listening to port ", port)
    routes(app)
})
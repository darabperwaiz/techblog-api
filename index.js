import { configDotenv } from "dotenv"
configDotenv()
import express from 'express'
import cors from 'cors'
import { db } from "./src/config/db.js";
import postRouter from "./src/post/post.routes.js";
import userRouter from "./src/user/user.route.js";

const PORT = process.env.PORT || 5000;

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/api/v1/', postRouter)
app.use('/api/v1/user/', userRouter)

app.get('/', (req, res)=> {
    res.end("Welcome To Blog Api")
})

app.listen(PORT, ()=> {
    console.log("Server is Running on PORT", PORT)
    db()
    
})
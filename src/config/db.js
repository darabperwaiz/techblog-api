import { configDotenv } from "dotenv"
configDotenv()
import mongoose from "mongoose";

const uri = process.env.DB_URI

export const db = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
        console.log("Database Connected Successfully!")
    })
}
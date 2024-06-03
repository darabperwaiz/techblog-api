import express from 'express'
import { signUp, logIn } from "./user.controller.js"
const userRouter = express.Router()


userRouter.post('/signup', signUp)
userRouter.post('/login', logIn)

export default userRouter;

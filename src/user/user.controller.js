import { userCreate, login } from "./user.repository.js";
import bcrypt from 'bcrypt'

export const signUp = async (req, res) => {
    const {email, password} = req.body
   const hashedPassword = await bcrypt.hash(password, 10)
    const user = await userCreate(email, hashedPassword)
    return res.status(201).send({success: true, message: "User Created Successfully!", user: user})
}

export const logIn = async (req, res) => {
    const {email, password} = req.body
    const userToken = await login(email, password)
    if(userToken.success == false) {
        return res.status(400).send(userToken)
    }
    res.cookie('jwt', userToken, {httpOnly: true, secure: true, maxAge: 3600000})
    return res.status(200).send(userToken)

}
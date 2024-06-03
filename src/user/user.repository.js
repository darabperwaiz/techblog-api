import User from "./user.model.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const secret = process.env.SECRET_KEY

export const getUser = async () => {
    const users = await User.find()
    return users
}

export const userCreate = async (firstname, lastname, email, password) => {
    const user = new User({firstname, lastname, email, password});
    const savedUser = await user.save()
    return savedUser
}

export const login = async (email, password) => {
    console.log(email)
    const user = await User.findOne({email: email})

    if(!user) {
        return {success: false, message: "User not found!"}
    }

    const pass =await bcrypt.compare(password, user.password);

    if(!pass) {
        return {success: false, message: "Invalid Credential!"}
    }

    const payload = {
        userId: user._id,
        userEmail: user.email,
        firstName: user.firstname
    }

    const token = jwt.sign(payload, secret, {expiresIn: '1h'})

    return {success: true, token: token}
}
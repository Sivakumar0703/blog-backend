import express from "express";
import { login, register } from "../Controllers/user.controller.js";


const userRouter = express.Router()

userRouter.post("/register_user",register);
userRouter.post("/login",login);


export default userRouter
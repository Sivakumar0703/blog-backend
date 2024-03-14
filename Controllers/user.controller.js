import User from "../Models/user.model.js";
import { hashCompare, hashPassword } from "./authorization.controller.js";
import TokenModel from "../Models/token.model.js";
import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config()
const secretKey = process.env.JWT_ACCESS_SECRET_KEY;
const refreshTokenKey = process.env.JWT_REFRESH_SECRET_KEY;



export const register = async(req,res) => {
    const {userName , email , password} = req.body;
    try {
        const isUserExist = await User.findOne({email:email});
        if(isUserExist){
            return res.status(400).json({message:"user already exist"})
        }
        const hashedPassword = await hashPassword(password);
        req.body.password = hashedPassword;

        const user = await User.create(req.body);
        user.save()
       res.status(200).json({message:"registeration successful"}) 
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

export const login = async(req,res) => {
    const {email , password} = req.body;
    try {
       const user = await User.findOne({email:email});
       if(user === null){
        return res.status(400).json({message:"incorrect email id"});
       } 
       console.log(user)
       const isPasswordMatched = await hashCompare(password,user.password);
       if(!isPasswordMatched){
        return res.status(400).json({message:"incorrect password"});
       }
       console.log("password",secretKey)
       const payload = {
        name : user.name,
        email: user.email,
       }
       const accessToken =  jwt.sign(payload,secretKey,{expiresIn:"900000"}); // 15 minutes
       const refreshToken = jwt.sign(payload,refreshTokenKey);
       console.log(accessToken , refreshToken)
       const newToken = await new TokenModel({token:refreshToken});
       await newToken.save();
       const token = {
        name:user.userName,
        email:user.email,
        accessToken:accessToken,
        refreshToken:refreshToken
       }
       console.log(token)
       res.status(200).json({message:"login successful",token:token});
    } catch (error) {
        res.status(500).json({message:"internal server error",error})
    }
}
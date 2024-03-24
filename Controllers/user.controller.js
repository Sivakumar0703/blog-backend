import User from "../Models/user.model.js";
import { createToken, hashCompare, hashPassword } from "./authorization.controller.js";


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
       const isPasswordMatched = await hashCompare(password,user.password);
       if(!isPasswordMatched){
        return res.status(400).json({message:"incorrect password"});
       }
       const payload = {
        name : user.userName,
        email: user.email,
        id: user._id,
       }
       const token = await createToken(payload);
       user.token = token;
       user.save()
       
       res.status(200).json({message:"login successful",user:{...payload,token:user.token}});
    } catch (error) {
        res.status(500).json({message:"internal server error",error})
    }
}
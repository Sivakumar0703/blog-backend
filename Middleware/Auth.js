// set user detail in request by using token
import jwt from 'jsonwebtoken';
import User from "../Models/user.model.js";

export const isAuthorised = async(req,res,next) => {
    let token;
   
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            // decode the token
            const decoded = jwt.verify(token,process.env.JWT_ACCESS_SECRET_KEY); 
            req.user = await User.findOne({email:decoded.email}).select("-password"); 
            next();
        } catch (error) {
           res.status(400).json({message:"token verification failed"}); 
        }
    } else {
        return res.status(400).json({message:"Token is unavailable"});
    }
}
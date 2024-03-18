import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    token:{
        type:String
    }
})

const User = mongoose.model("users",userSchema);
export default User
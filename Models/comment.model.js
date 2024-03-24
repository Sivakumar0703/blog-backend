import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
});

const Comment = mongoose.model("comments",commentSchema);
export default Comment
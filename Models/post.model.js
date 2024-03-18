import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    author : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    image : {
        type:String,
        required:true
    },
    category : {
        type:String,
        required:true
    },
    title : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    createdAt : {
        type:String,
        required:true
    }
    
})

const Post = mongoose.model("posts",postSchema);
export default Post
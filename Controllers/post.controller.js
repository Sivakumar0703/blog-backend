import Post from "../Models/post.model.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

// ES module don't have the __filename & __dirname by default
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllPost = async(req,res) => {
    try {
       const posts = await Post.find({});
       res.status(200).json({message:"fetched all post" , post:posts , length:posts.length});  
    } catch (error) {
        res.status(500).json({message:"internal server error"}); 
    }
}

export const getPostById = async(req,res) => {
    const {id} = req.params;
    try {
        if(!id){
          return  res.status(400).json({message:"id missing"}); 
        }
        const post = await Post.find({_id:id});
        res.status(200).json({message:"Found Post" , blog:post});
    } catch (error) {
        res.status(500).json({message:"internal server error"}); 
    }
}

export const getUserPosts = async(req,res) => {
    const {user} = req;
    try {
        const posts = await Post.find({email:user.email});
        res.status(200).json({message:"post found" , posts:posts});
    } catch (error) {
        res.status(500).json({message:"internal server error"}); 
    }
}

export const createPost = async(req,res) => {
    try {
        const newPost = await Post.create(req.body);
        newPost.save();
        res.status(200).json({message:"successfully posted"});      
    } catch (error) {
       res.status(500).json({message:"internal server error"}); 
    }
}

export const updatePost = async(req,res) => {
    const{id , previousImage} = req.params;
    const{imageHasChanged} = req.body;
    try {
        if(!id){
            return  res.status(400).json({message:"id missing"}); 
        }

        // deleting previous image
        if(imageHasChanged && previousImage){
            fs.unlink(`${__dirname.split("\\Controllers")[0]}/public/blog-images/${previousImage}` , (error) => {
                if(error){
                    console.log("error in image deletion",error)
                } else {
                    console.log('image deleted')
                }
             })
         } 

// updating the post
    await Post.findByIdAndUpdate( id , {$set:req.body} );
    res.status(200).json({message:"updated successful"});
        
    } catch (error) {
        res.status(500).json({message:"internal server error"}); 
    }
}

export const deletePost = async(req,res) => {
    const {id} = req.params;
    try {
        if(!id){
            return res.status(400).json({message:"post id not found"});
        }
        await Post.findByIdAndDelete({_id:id});
        res.status(200).json({message:"post deleted"});
    } catch (error) {
        res.status(500).json({message:"error in post deletion"});
    }
}
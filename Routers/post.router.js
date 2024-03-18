import express from "express";
import { createPost, deletePost, getAllPost, getPostById, updatePost } from "../Controllers/post.controller.js";



const postRouter = express.Router();

postRouter.get("/",getAllPost);
postRouter.get("/getPostById/:id",getPostById);
postRouter.post('/create-post',createPost);
postRouter.put('/update-post/:id/:previousImage',updatePost);
postRouter.delete('/delete/:id',deletePost);

export default postRouter
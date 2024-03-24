import express from "express";
import { createPost, deletePost, getAllPost, getPostById, getUserPosts, updatePost } from "../Controllers/post.controller.js";
import { isAuthorised } from "../Middleware/Auth.js";



const postRouter = express.Router();

postRouter.get("/",getAllPost);
postRouter.get("/getPostById/:id",getPostById);
postRouter.get("/get-my-post",isAuthorised,getUserPosts);
postRouter.post('/create-post',createPost);
postRouter.put('/update-post/:id/:previousImage',updatePost);
postRouter.delete('/delete/:id',deletePost);

export default postRouter
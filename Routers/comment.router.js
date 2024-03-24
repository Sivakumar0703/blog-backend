import express from "express";
import { addComment, deleteComment, getComment } from "../Controllers/comment.controller.js";


const commentRouter = express.Router();

commentRouter.post("/new",addComment);
commentRouter.get("/get/:id",getComment);
commentRouter.delete("/delete",deleteComment);

export default commentRouter
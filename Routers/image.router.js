import express from "express";
import { uploadImage } from "../Controllers/image.controller.js";
import upload from "../utils/upload.js";

const imageRouter = express.Router();

imageRouter.post('/file', upload.single("file") ,uploadImage);



export default imageRouter;
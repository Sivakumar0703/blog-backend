import express from "express";
import { uploadImage } from "../Controllers/image.controller.js";
// import { getImage, uploadImage } from "../Controllers/image.controller.js";
import upload from "../utils/upload.js";

const imageRouter = express.Router();

imageRouter.post('/file', upload.single("file") ,uploadImage);

// imageRouter.get('/file/:filename',getImage)

export default imageRouter;
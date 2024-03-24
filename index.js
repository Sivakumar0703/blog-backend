import express from "express";
import "dotenv/config";
import cors from "cors";
import ConnectDb from "./Database/ConfigDb.js";
import userRouter from "./Routers/user.router.js";
import imageRouter from "./Routers/image.router.js";
import postRouter from "./Routers/post.router.js";
import commentRouter from "./Routers/comment.router.js";
import feedbackRouter from "./Routers/feeback.router.js";



const app = express();
const port = process.env.PORT;

const corsOptions = {
    origin:process.env.URL,
    credentials: true,
    optionSuccessStatus: 200,
  };

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/user",userRouter);
app.use("/api/upload",imageRouter);
app.use("/api/post",postRouter);
app.use("/api/comment",commentRouter);
app.use("/api/feedback",feedbackRouter);
ConnectDb();


 app.listen(port , ()=>{
    console.log("💻 server is running @ ",port)
})



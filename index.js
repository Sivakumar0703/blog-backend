import express from "express";
import "dotenv/config";
import cors from "cors";
import ConnectDb from "./Database/ConfigDb.js";
import userRouter from "./Routers/user.router.js";



const app = express();
const port = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/user",userRouter);
ConnectDb();


 app.listen(port , ()=>{
    console.log("💻 server is running @ ",port)
})



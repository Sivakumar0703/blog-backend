import express from "express";
import "dotenv/config";
import cors from "cors";
import ConnectDb from "./Database/ConfigDb.js";



const app = express();
const port = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());
ConnectDb();


 app.listen(port , ()=>{
    console.log("💻 server is running @ ",port)
})



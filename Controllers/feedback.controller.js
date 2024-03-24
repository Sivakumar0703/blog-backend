import {sendMail} from "../utils/nodemailer.js";
import Feedback from "../Models/feedback.model.js";


export const sendFeedback = async(req,res) => {
    const{email,name,message} = req.body
    try {
    const feedback = await Feedback.create(req.body); 
    const subject = "Feedback from Blog";
    const content = `
    <html>
    <head>
    <style>
    #container{
        background-color:#152238;
        margin:10px;
    }
    h1,p{
        color: #009688 ;
    }
    </style>
    </head>
    <body>
    <div id="container">
    <h1>FEEDBACK FROM BLOG</h1>
    <p>Hello , Admin </p>
    <p> This feedback is sent by ${name} </p>
    <p> ${message} </p>
    <p>Thank you!</p>
    </div>
    </body>
    </html>`
    feedback.save();
    sendMail(email,subject,content)
    res.status(200).json({message:"feedback sent"})
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
}
// import {GridFsStorage} from "multer-gridfs-storage";
// import multer from "multer";

// const storage = new GridFsStorage({
//     url:process.env.MONGO_CONNECTION_URL,
//     options : {userNewUrlParser:true},
//     file:(req,file) => {
//         const match = ["image/png","image/jpg","image/jpeg"];
//         if(match.indexOf(file.mimeType) === -1){
//             return `${Date.now()}-blog-${file.originalname}`
//         }

//         return {
//             bucketName : "images", // check for name attribute in file (input)
//             filename:`${Date.now()}-blog-${file.originalname}`
//         }
//     }
// })

// export default multer({storage})

import multer from "multer";
import path from "path";
import fs from "fs";
let upload;

console.log("multer")

// storage engine 
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/blog-images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "_" + path.parse(file.originalname).name + path.extname(file.originalname))
    }
})

// setting storage
// const upload = multer({storage:storage});
export default upload = multer({storage})
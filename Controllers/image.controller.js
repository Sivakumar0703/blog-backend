// import grid from "gridfs-stream";
// import mongoose from "mongoose";

// export const uploadImage = async(req,res) => {
//     try {
//        if(!req.file || req.file.length === 0){
//         res.status(400).json({message:"file missing"})
//        } 

//        const imageUrl = `http://localhost:8000/${req.file.filename}/file`;
//        res.status(200).json({message:"image url fetched",imageUrl})
//     } catch (error) {
//         res.status(500).json({message:"internal server error"})
//     }
// }

// let gridfsBucket,gfs;
// const conn = mongoose.connection;
// conn.once("open",()=>{
//     // bucket contain chunk&files
//     gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db , {
//         bucketName : "blog-images"
//     })
//     gfs = grid(conn.db , mongoose.mongo);
//     gfs.collection("blog-images")
// })

// export const getImage = async(req,res) => {
//     try {
//      const file = await gfs.files.findOne({filename:req.params.filename});
//      const readStream = gridfsBucket.openDownloadStream(file._id);
//      readStream.pipe(res);
//     } catch (error) {
//         res.status(500).json({message:"internal server error in get image"})

//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////



import path from "path";
import fs from "fs";





// get request
// pictureRouter.get('/' , async(req,res) => {
//     try {
//         const result = await imageModel.find();
//         res.status(200).json({message:'data fetching done' , result})
//     } catch (error) {
//         res.status(400).json({message:'data fetching failed' , error:error})
//     }
// })

// post request
export const uploadImage =  async(req,res) => {
    try {
        const url = `http://localhost:5000/blog-images/${req.file.fieldname}_${path.parse(req.file.originalname).name}${path.extname(req.file.originalname)}`
        res.status(200).json({message:'success',url})
    } catch (error) {
       res.status(500).json({message:'error occured during file upload'})  
    }
}




// update request
// pictureRouter.put('/update/profile/picture' , upload.single('image') , async(req,res) => {
//     try {
//         // deleting previous image from the server
//          if(req.body.previousImage){
//             console.log('old' , req.body.previousImage )
//             fs.unlink(`./public/images/${req.body.previousImage}` , (error) => {
//                 if(error){
//                     console.log(error)
//                 } else {
//                     console.log('image deleted')
//                 }
//              })
//          } else {
//             console.log('skipped')
//          }
         
//          // updating new image to the database 
//         const image = req.file.filename;
//         console.log(image , 'new');
//         const update = await imageModel.updateOne({email:req.body.email} , {image:image} )
//         res.status(200).json({message:'update success'})
//         console.log(update)
//     } catch (error) {
//        res.status(400).json({message:'update failed' , error}) 
//     }
// })  



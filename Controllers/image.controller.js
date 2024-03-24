import path from "path";

// post request
export const uploadImage =  async(req,res) => {
    try {
        const url = `http://localhost:5000/blog-images/${req.file.fieldname}_${path.parse(req.file.originalname).name}${path.extname(req.file.originalname)}`
        res.status(200).json({message:'success',url})
    } catch (error) {
       res.status(500).json({message:'error occured during file upload'})  
    }
}





import Comment from "../Models/comment.model.js";


export const addComment = async(req,res) => {
    try {
     const newComment = await Comment.create(req.body);
     newComment.save();
        res.status(200).json({message:"comment posted"});
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
}

export const getComment = async(req,res) => {
    const {id} = req.params;
    try {
        if(!id){
            return res.status(400).json({message:"comment id missing"});
        } 
        const comment = await Comment.find({postId:id});
        res.status(200).json({message:"comments are fetched" , comments:comment});
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
}

export const deleteComment = async(req,res) => {
    const {id} = req.params;
    try {
        if(!id){
            return res.status(400).json({message:"comment id not found"});
        }
        await Comment.findByIdAndDelete({_id:id});
        res.status(200).json({message:"comment deleted"});
    } catch (error) {
        res.status(500).json({message:"error in post deletion"});
    }
}
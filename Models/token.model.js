
import mongoose from "mongoose";

const tokenSchema = mongoose.Schema({
    token : {
        type : String,
        required:true
    }
})

const TokenModel = mongoose.model("tokens",tokenSchema);
export default TokenModel
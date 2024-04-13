import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnectionString = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@cluster0.kyumxs1.mongodb.net/`;

const ConnectDb = async() => {
    try {
      const connection = await mongoose.connect(dbConnectionString);
      console.log("💾 mongoDb connected")   
    } catch (error) {
        console.log("error in mongoDb connection",error)
    }
}

export default ConnectDb
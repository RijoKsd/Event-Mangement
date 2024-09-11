import mongoose from "mongoose";

export default async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("Error in connecting to MongoDB", err);
        process.exit(1);
    }
}
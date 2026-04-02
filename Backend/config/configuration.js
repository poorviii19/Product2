import mongoose from "mongoose";

const Connection1 = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/Product2");
        console.log("database connected succesfully")
    }
    catch(err){
        console.log("Failed to connect database", err);
    }
}

export default Connection1;
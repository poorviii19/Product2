import Connection1 from "./config/configuration.js";
import ProductRoute from "./routes/productRoutes.js";
import express from "express";
import cors from "cors";

const obj = express();

obj.use(cors());

obj.use(express.json());
obj.use("/api", ProductRoute);

const Server = async()=>{
    try{
        await Connection1()
        obj.listen(3000, console.log("Server connected successfully"));
    }
    catch(err){
        console.log("error in server starting");
    }
}
Server();
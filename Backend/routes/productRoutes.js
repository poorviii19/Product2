import { showProd, addProd, updateProd } from "../controllers/productControllers.js";
import express from "express";

const ProductRoute = express.Router();

ProductRoute.get("/show", showProd);

ProductRoute.post("/add", addProd);

ProductRoute.put("/update/:id", updateProd)

export default ProductRoute;

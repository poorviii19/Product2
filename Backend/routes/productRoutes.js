import { showProd, addProd, updateProd, deleteProd } from "../controllers/productControllers.js";
import express from "express";

const ProductRoute = express.Router();

ProductRoute.get("/show", showProd);

ProductRoute.post("/add", addProd);

ProductRoute.put("/update/:id", updateProd)
ProductRoute.delete("/delete/:id",deleteProd)

export default ProductRoute;

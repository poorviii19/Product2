import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    product_name: {type: String, required: true},
    product_price: {type: Number, required: true},
    product_image: {type: String, required: true},
    product_description: {type: String, required: true}
});


const productModel = mongoose.model("Cart", productSchema);

export default productModel;

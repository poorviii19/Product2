import productModel from "../models/productSchema.js";

const showProd = async (req,res)=>{
    const products = await productModel.find();
    res.json(products);
}

const addProd = async (req,res) => {
    const data = req.body;
    const products = await productModel.create(data)
    res.json(products);
}

const updateProd = async(req,res)=>{
    try{
        const{id} = req.params;
        const {product_name, product_price, product_image, product_description} = req.body;
        const updatedProd = await productModel.findByIdAndUpdate(
            id,
            {product_name, product_price, product_image, product_description},
            {new: true, runValidators: true}

        );
        if(!updatedProd){
            return res.status(404).json({'message':'not updated'});
        }
        res.status(200).json({'message':'updated successfully', data: updatedProd})

    }
    catch(err){
        console.log(err);
        res.status(500).json({'message':'Not updated, server error'})
    }

    
}

const deleteProd = async(req,res)=>{
    try{
        const {id} = req.params;
        const del = await productModel.findByIdAndDelete(id);
        if(!del){
            res.status(404).json({"message":"not deleted"})
        }
        res.status(200).json({"message":"Deleetd Succesfully", product: del})


    }
    catch(err){
        console.log("server error",err)
    }

}

export {showProd, addProd, updateProd, deleteProd};
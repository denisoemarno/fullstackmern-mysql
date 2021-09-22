import Product from "../models/productsModels.js";

export const GetAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.json({message:error.message});
    }
}
export const GetProductsById = async (req, res) => {
    try {
        const products = await Product.findAll({
            where: {
                id:req.params.id
            }
        });
        res.json(products[0]);
    } catch (error) {
        res.json({message:error.message});
    }
}
export const CreatedProduct = async (req, res) => {
    try {
       await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({message:error.message});
    }
}
export const UpdateProduct = async (req, res) => {
    try {
       await Product.update(req.body,{
           where: {
               id:req.params.id
           }
       });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({message:error.message});
    }
}
export const DeleteProduct = async (req, res) => {
    try {
       await Product.destroy({
           where: {
               id:req.params.id
           }
       });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({message:error.message});
    }
}
import express from "express";
import 
{ GetAllProducts, 
  CreatedProduct, 
  GetProductsById,
  UpdateProduct,
  DeleteProduct } from "../controller/products.js";

const router = express.Router();

router.get('/', GetAllProducts);
router.get('/:id', GetProductsById);
router.post('/', CreatedProduct);
router.patch('/:id', UpdateProduct);
router.delete('/:id', DeleteProduct);

export default router;
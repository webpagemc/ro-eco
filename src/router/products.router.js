import { Router } from "express";
import productControllers from "../controllers/products.controller.js" ;

const productRouter = Router();

//obtener todos los products
productRouter.get( "/", productControllers.getAllProducts );

//obtener un producto
productRouter.get( "/:id", productControllers.getOneProduct );


export default productRouter
import { Router } from "express";
import productControllers from "../controllers/products.controller.js" ;

const productRouter = Router();

//obtener todos los productos
productRouter.get( "/", productControllers.getAllProducts );

//obtener Un producto
productRouter.get( "/:paramid", productControllers.getOneProduct )

//crear un producto
productRouter.post("/", productControllers.createOneProduct);

productRouter.put("/:paramid", productControllers.updateProduct );


export default productRouter;
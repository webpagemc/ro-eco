import { Router } from "express";
import productControllers from "../controllers/products.controller.js" ;

const productRouter = Router();

//obtener todos los productos
productRouter.get( "/", productControllers.getAllProducts );

//obtener Un producto
productRouter.get( "/:paramid", productControllers.getOneProduct )

//crear un producto
productRouter.post("/", productControllers.createOneProduct);

//actualizar producto
productRouter.put("/:paramid", productControllers.updateProduct );

//enviar a la papelera
productRouter.delete("/trash/:paramid", productControllers.deleteTemporary );

//eliminar definitivamente
productRouter.delete("/:paramid", productControllers.deleteOneProduct );


export default productRouter;
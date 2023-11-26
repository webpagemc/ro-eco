import { Router } from "express";

const productRouter = Router();

//obtener todos los products
productRouter.get( "/", (req, res)=>{

    try {

        const resolve = {

            status:200,
            msj:"Productos Obtenidos",
            data:[]

        }
        
        res.status(200).send(resolve)
        
    } catch (err) { res.status(404).send({

        status:404,
        msj:"Hubo un error",
        data:err

    })}

});

//obtener un producto
productRouter.get( "/:id", (req, res)=>{

    try {

        const { id } = req.params;

        const resolve = {

            status:200,
            msj:"Productos Obtenidos",
            data:`Producto nro ${id}`

        }

        res.status(200).send(resolve)
        
    } catch (err) { res.status(404).send({

        status:404,
        msj:"Hubo un error",
        data:err

    })}

})


export default productRouter
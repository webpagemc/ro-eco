const productControllers = {

    getAllProducts:(req, res)=>{

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
    
    },
    
    getOneProduct:(req, res)=>{

        try {
    
            const { id } = req.params;
            const { name } = req.query;
    
            const resolve = {
    
                status:200,
                msj:"Productos Obtenidos",
                data:`Producto nro ${id}, nombre:${name}`
    
            }
    
            res.status(200).send(resolve)
            
        } catch (err) { res.status(404).send({
    
            status:404,
            msj:"Hubo un error",
            data:err
    
        })}
    
    }

}

export default productControllers;
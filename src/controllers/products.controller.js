import productModel from "../models/products.model.js"

const productControllers = {

    getAllProducts: async(req, res)=>{

        try {

            const allProducts = await productModel.find();
    
            const resolve = {
    
                status:200,
                msj:"Productos Obtenidos",
                data:allProducts
    
            }
            
            res.status(200).send(resolve)
            
        } catch (err) { res.status(404).send({
    
            status:404,
            msj:"Hubo un error",
            data:err
    
        })}
    
    },

    getOneProduct: async(req, res)=>{
        
        try {

            const { paramid } = req.params;

            const product = await productModel.findOne({ _id: paramid}) 

            const resolve = {
    
                status:200,
                msj:"Productos Obtenidos",
                data:product
    
            }
            
            res.status(200).send(resolve)
            
        } catch (err) { res.status(404).send({
    
            status:404,
            msj:"Hubo un error",
            data:err
    
        })}
    },

    createOneProduct: async(req, res)=>{

        try {

            const {body} = req;

            const newProduct = await productModel.create(body);
    
            const resolve = {
    
                status:200,
                msj:"Producto Creado",
                data:newProduct
    
            }
            
            res.status(200).send(resolve)
            
        } catch (err) { res.status(404).send({
    
            status:404,
            msj:"Hubo un error",
            data:err
    
        })}

    },



}

export default productControllers;
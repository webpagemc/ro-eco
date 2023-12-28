import productModel from "../models/products.model.js"

const productControllers = {

    getAllProducts: async(req, res)=>{

        try {

            const allProducts = await productModel.find( { visible:true } );
    
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

            const { paramid } = req.params

            const product = await productModel.findOne( { _id: paramid} ) 

            if(product.visible === false){ 

                const resolve = {
    
                    status:400,
                    msj:"Product NOT visible",
                    data:{visible:false}
        
                }
                
                res.status(400).send(resolve);
            
            }else{

                const resolve = {
    
                    status:200,
                    msj:"Productos Obtenidos",
                    data:product
        
                }
                
                res.status(200).send(resolve)

            }
            
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

    updateProduct : async(req, res) => {

        try {

            const {paramid} = req.params;
            const {body} = req;

            const updatedProduct = await productModel.findOneAndUpdate( {_id: paramid} , body );

            const resolve = {
                status:200,
                msj:"Producto Actualizado",
                data:updatedProduct
            }
            
            res.status(200).send(resolve)
            
        } catch (err) { res.status(404).send({
    
            status:404,
            msj:"Hubo un error",
            data:err
    
        })}

    },

    deleteTemporary: async (req, res) => {

        try {

            const {paramid} = req.params;
            const deletedProduct = await productModel.findOneAndUpdate( {_id: paramid} , { visible:false } );

            const resolve = {
                status:200,
                msj:"Producto Enviado a Papelera",
                data:deletedProduct
            }
            
            res.status(200).send(resolve)
            
        } catch (err) { res.status(404).send({
    
            status:404,
            msj:"Hubo un error",
            data:err
    
        })}

    },

    deleteOneProduct: async (req, res) => {

        try {

            const {paramid} = req.params;
            const deletedProduct = await productModel.findOneAndDelete( {_id:paramid} );

            const resolve = {
                status:200,
                msj:"Producto Elimado",
                data: deletedProduct
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
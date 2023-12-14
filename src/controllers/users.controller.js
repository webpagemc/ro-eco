import userModel from "../models/users.model.js";

const userControllers = {

    getAllUsers: async(req, res) => {

        try{

        const allUsers = await userModel.find();

        const resolve = {

            status: 200,
            msj: "Usuarios obtenido",
            data: allUsers
        }

        res.status(200).send(resolve)

        } catch (err) { res.status(404).send({
        
            status:404,
            msj:"Hubo un error",
            data:err

         })}

}

}

export default userControllers;
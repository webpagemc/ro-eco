import { Schema, model } from "mongoose";

const productSchema = new Schema(

    {
        name:{ type:String, required:true },
        description:{type:String, required:true},
        price:{type:Number, required:true},
        stock:{type:Number, required:true, default:0},
        code:{type:Number, required:true},
        thumbnail:{ type:String, required:true}

    },
    {
        timestamps:true,
    }

);

const productModel = model("products", productSchema );

export default productModel;
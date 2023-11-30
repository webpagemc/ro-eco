import express from "express";
import enviroment from "./config/dotenv.js";
import dbConnect from "./config/mongoose.js";

import productRouter from "./router/products.router.js";

const app = express();

//middlewares
app.use( express.urlencoded() ); //permite aceptar formularios
app.use( express.json() ); //permite trabajar con jsons

//rutas
app.use("/products", productRouter);

app.listen( enviroment.PORT , ()=>{ dbConnect() });


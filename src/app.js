import express from "express";
import enviroment from "./config/dotenv.js";

import productRouter from "./router/products.router.js";

const app = express();

app.use( express.json() );
app.use( express.urlencoded() ); 

//rutas
app.use("/products", productRouter);

app.listen( enviroment.PORT , ()=>{ console.log("APP ON!") });
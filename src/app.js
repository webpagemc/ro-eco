import express from "express";
import enviroment from "./config/dotenv.js";
import dbConnect from "./config/mongoose.js";

import productRouter from "./router/products.router.js";
import userRouter from "./router/users.router.js";

const app = express();

//middlewares
app.use( express.urlencoded() ); //permite aceptar formularios
app.use( express.json() ); //permite trabajar con jsons

//rutas
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen( enviroment.PORT , ()=>{ dbConnect() });


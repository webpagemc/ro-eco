import express from "express";
import hbs from "express-handlebars";

import enviroment from "./config/dotenv.js";
import dbConnect from "./config/mongoose.js";

import productRouter from "./router/products.router.js";
import viewsRouter from "./router/views.router.js";
import cors from "cors"

const app = express();

//middlewares
app.use( express.urlencoded() ); //permite aceptar formularios
app.use( express.json() ); //permite trabajar con json
app.use( cors() );

//rutas
app.use("/views", viewsRouter);
app.use("/products", productRouter);

//static files
app.use( express.static("src/public") );



//hbs
app.engine("hbs", hbs.engine());
app.set("view engine", "hbs");
app.set("views", "src/public/views");

app.listen( enviroment.PORT , ()=>{ dbConnect() });


import express from "express";
import enviroment from "./config/dotenv.js";

const app = express();

app.listen( enviroment.PORT , ()=>{ console.log("APP ON!") })
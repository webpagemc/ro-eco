import {Router} from "express";
import viewsControllers from "../controllers/views.controllers.js";

const viewsRouter = Router();

viewsRouter.get("/home", viewsControllers.home)

viewsRouter.get("/info",viewsControllers.info )

export default viewsRouter;
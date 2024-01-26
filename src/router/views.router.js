import {Router} from "express";
import viewsControllers from "../controllers/views.controllers.js";

const viewsRouter = Router();

viewsRouter.get("/home", viewsControllers.home);

viewsRouter.get("/info",viewsControllers.info );

viewsRouter.get("/addProducts",viewsControllers.addProducts);

viewsRouter.get("/manageProducts", viewsControllers.manageProducts);

export default viewsRouter;
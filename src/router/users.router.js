import { Router } from "express";
import userControllers from "../controllers/users.controller.js";

const userRouter = Router();

userRouter.get("/", userControllers.getAllUsers);

export default userRouter;


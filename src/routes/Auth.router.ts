import { Router } from "express";
import AuthController from "../app/controllers/AuthController";
import checkToken from "../middlewares/AuthToken";

const router = Router();

router
        .post("/login", AuthController.Login)
        .post("/auth", checkToken, AuthController.Auth)

export default router
import { Router } from "express";
import AuthController from "../app/controllers/AuthController";
import checkToken from "../middlewares/AuthToken";

const router = Router();

router
        .post("/login", checkToken ,AuthController.Login)

export default router
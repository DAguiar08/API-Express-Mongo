import { Router } from "express";
import UserController from "../app/controllers/UserController";

const router = Router();

router
    .get("/users", UserController.index)
    .get("/user/:id", UserController.findById)
    .post("/user", UserController.create)
    .put("/user/:id", UserController.update)
    .patch("/user:id", UserController.update)
    .delete("/user:id", UserController.delete)

export default router
import { Router } from "express";
import UserController from "../app/controllers/UserController";
import createUserValidation from "../app/validations/UserValidations/createUserValidation";
import getUserValidator from "../app/validations/UserValidations/getUserValidator";
import patchUserValidator from "../app/validations/UserValidations/patchUserValidator";
import PutUserValidator from "../app/validations/UserValidations/PutUserValidator";

const router = Router();

router
    .get("/users", getUserValidator, UserController.index)
    .get("/user/:id", getUserValidator, UserController.findById)
    .post("/user", createUserValidation, UserController.create)
    .put("/user/:id", PutUserValidator,UserController.update)
    .patch("/user:id", patchUserValidator,UserController.update)
    .delete("/user:id", UserController.delete)

export default router
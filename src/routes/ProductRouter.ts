import { Router } from "express";
import ProductController from "../app/controllers/ProductController";
import createValidation from "../app/validations/Validator"
import patchValidation from "../app/validations/PatchValidator";
import GetValidation from "../app/validations/GetValidation";
//import swaggerUi from "swagger-ui-express"
//import swaggerDocs from "./swagger.json"

const router = Router();

router
  .get("/products", GetValidation ,ProductController.index) //Pode Buscar todos assim como receber filtros
  .get("/product/:id", GetValidation ,ProductController.findById) //Busca por ID
  .get("/products/lowstock", GetValidation ,ProductController.findLowStock)
  .post("/product", createValidation, ProductController.create)
  .post("/products/createCSV", ProductController.createCsv)
  .put("/product/:id", createValidation, ProductController.update)
  .patch("/product/:id", patchValidation, ProductController.updateOne)
  .delete("/product/:id", ProductController.delete);

export default router;

//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

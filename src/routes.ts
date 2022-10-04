import { Router } from "express";
import ProductController from "./controllers/ProductController";
import createValidation from "./validations/validator";
import patchValidation from "./validations/PATCHvalidator";

const router = Router();

router
  .get("/products", ProductController.index) //Pode Buscar todos assim como receber filtros
  .get("/product/:id", ProductController.findById) //Busca por ID
  .get("/product/lowstock", ProductController.findLowStock)
  .post("/product", createValidation, ProductController.create)
  .post("/products/createCSV", ProductController.createCsv)
  .put("/product/:id", createValidation, ProductController.update)
  .patch("/product/parcial/:id", patchValidation, ProductController.updateOne)
  .delete("/product/:id", ProductController.delete);

export default router;

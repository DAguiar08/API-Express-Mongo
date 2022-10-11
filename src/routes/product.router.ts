import { Router } from "express";
import ProductController from "../app/controllers/ProductController";
import createValidation from "../app/validations/Validator";
import patchValidation from "../app/validations/PatchValidator";
import GetValidation from "../app/validations/GetValidation";
import PutValidator from "../app/validations/PutValidator";
import CsvValidator from "../app/validations/CsvValidator";

const router = Router();

router
  .get("/products", GetValidation, ProductController.index) //Pode Buscar todos assim como receber filtro
  .get("/product/:id", GetValidation, ProductController.findById) //Busca por ID
  .get("/products/lowstock", GetValidation, ProductController.findLowStock)
  .post("/product", createValidation, ProductController.create)
  .post("/products/createCSV", CsvValidator, ProductController.createCsv)
  .put("/product/:id", PutValidator, ProductController.update)
  .patch("/product/:id", patchValidation, ProductController.updateOne)
  .delete("/product/:id", ProductController.delete);

export default router;

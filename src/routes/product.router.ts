import { Router } from "express";
import ProductController from "../app/controllers/ProductController";
import createValidation from "../app/validations/ProductValidations/Validator";
import patchValidation from "../app/validations/ProductValidations/PatchValidator";
import GetValidation from "../app/validations/ProductValidations/GetValidation";
import PutValidator from "../app/validations/ProductValidations/PutValidator";
import CsvValidator from "../app/validations/ProductValidations/CsvValidator";
import multer from "multer";

const router = Router();

const multerConfig = multer();

router
  .get("/products", GetValidation, ProductController.index) //Pode Buscar todos assim como receber filtro
  .get("/product/:id", GetValidation, ProductController.findById) //Busca por ID
  .get("/products/lowstock", GetValidation, ProductController.findLowStock)
  .post("/product", createValidation, ProductController.create)
  .post("/products/createCSV", multerConfig.single("file") ,CsvValidator, ProductController.createCsv)
  .put("/product/:id", PutValidator, ProductController.update)
  .patch("/product/:id", patchValidation, ProductController.updateOne)
  .delete("/product/:id", ProductController.delete);

export default router;

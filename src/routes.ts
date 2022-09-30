import { Router } from "express";
import ProductController from "./controllers/ProductController";
import createValidation from "./validations/validator";

const router = Router();

router
  .get("/produtos", ProductController.index) //Pode Buscar todos assim como receber filtros
  .get("/produto/:id", ProductController.findById) //Busca por ID
  .get("/produtos/lowstock", ProductController.findLowStock)
  .post("/produto", createValidation, ProductController.create)
  .post("/produtos/createCSV", ProductController.criaCsv)
  .put("/produto/:id", createValidation, ProductController.update)
  .patch("/produto/parcial/:id", ProductController.updateOne)
  .delete("/produto/:id", ProductController.delete);

export default router;

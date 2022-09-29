import { Router } from "express";
import ProdutoController from "./controllers/ProdutoController";
import createValidation from "./validations/validator";

const router = Router();

router
  .get("/produtos", ProdutoController.index) //Pode Buscar todos assim como receber filtros
  .get("/produto/:id", ProdutoController.findById) //Busca por ID
  .get("/produtos/lowstock", ProdutoController.findLowStock)
  .post("/produto", createValidation, ProdutoController.create)
  .post("/produtos/createCSV", ProdutoController.criaCsv)
  .put("/produto/:id", createValidation, ProdutoController.update)
  .patch("/produto/parcial/:id", ProdutoController.updateOne)
  .delete("/produto/:id", ProdutoController.delete);

export default router;

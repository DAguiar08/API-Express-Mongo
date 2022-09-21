import { Router } from "express";
import ProdutoController from "./controllers/ProdutoController";
import createValidation from "./validations/validator"

const router = Router()

router
        .get('/produtos', ProdutoController.index)
        .get('/produto/:id', ProdutoController.findById)
        .post('/produto', createValidation, ProdutoController.create)
        .put('/produto/:id', ProdutoController.update)
        .delete('/produto/:id', ProdutoController.delete)

export default router 
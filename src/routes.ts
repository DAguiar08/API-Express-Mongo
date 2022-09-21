import { Router } from "express";
import ProdutoController from "./controllers/ProdutoController";


const router = Router()

router
        .get('/produtos', ProdutoController.index)
        .get('/produto/:id', ProdutoController.findById)
        .post('/produto', ProdutoController.create)
        .put('/produto/:id', ProdutoController.update)
        .delete('/produto/:id', ProdutoController.delete)

export default router 
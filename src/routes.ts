import { Router } from "express";
import ProdutoController from "./controllers/ProdutoController";


const router = Router()

router
        .get('/', ProdutoController.index)
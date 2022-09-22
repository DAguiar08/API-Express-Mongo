import { Request, Response } from "express"
import ProdutoModel from "../database/ProdutoModel"
import ProdutoService from "../service/ProdutoService"

const ProdutoController = {

    async index(req : Request, res : Response): Promise<Response> {
        let produtos = await ProdutoModel.find()
            return res.json(produtos)
    },

    async findById(req : Request, res : Response): Promise<Response> {
        const { id } = req.params
        let produto = await ProdutoModel.findById(id)
            return res.json(produto)
    },

   /* async create(req : Request, res : Response): Promise<Response> {
        let produto = await ProdutoModel.create(req.body)
            return res.json(produto)
    },*/

    async create(req : Request, res : Response): Promise<Response> {
        try {
          const { titulo, descricao, departamento, marca, price, qtd_stock, bar_codes } = req.body;
          const result = await ProdutoService.create({ titulo, descricao, departamento, marca, price, qtd_stock, bar_codes });
          return res.status(201).json(result);
        } catch (error) {
          return res.status(500).json({ error });
        }
      },

    async update(req : Request, res : Response): Promise<Response> {
        const { id } = req.params
        let produto = await ProdutoModel.findByIdAndUpdate(id, req.body)
            return res.json(`Produto ${id} alterado!`)
    },

    async delete(req : Request, res : Response): Promise<Response> {
        const { id } = req.params
        let produto = await ProdutoModel.findByIdAndDelete(id)
            return res.json(`Produto Deletado!`)
    },
}

export default ProdutoController
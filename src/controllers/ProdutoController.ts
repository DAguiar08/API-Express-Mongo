import { Request, Response } from "express"
import ProdutoModel from "../database/ProdutoModel"
import ProdutoService from "../service/ProdutoService"

const ProdutoController = {

    async index(req : Request, res : Response): Promise<Response> {
        try {
            const payload = req.query
            let produtoFiltrado = await ProdutoModel.find(payload).limit(50)
                return res.status(200).json(produtoFiltrado)
        } catch (error) {
            return res.status(400).json({ error })
        }
        
    },

    /*async findLowStock(req : Request, res : Response): Promise<Response> {
        try {
            const qtd_stock = req.query
            let produtoFiltrado = await ProdutoModel.find(qtd_stock).limit(50)
                return res.status(200).json(produtoFiltrado)
        } catch (error) {
            return res.status(400).json({ error })
        }
        
    },*/

    async findById(req : Request, res : Response): Promise<Response> {
        try {
            const { id } = req.params
            let produto = await ProdutoModel.findById(id)
                return res.json(produto)
        } catch (error) {
            return res.status(400).json({ error })
        }
        
    },

    async create(req : Request, res : Response): Promise<Response> {
        try {
            let { titulo, descricao, departamento, marca, price, qtd_stock, bar_codes, stock_control_enebled } = req.body;
                if(qtd_stock < 1) {
                    stock_control_enebled = false
                } else {
                    stock_control_enebled = true
                }
                const ValidaCB = await ProdutoModel.findOne({ bar_codes: req.body.bar_codes })
                    if (ValidaCB) {
                        return res.status(404).json('Esse código de barras já existe!')
                    } else {
                        const result = await ProdutoService.create({ titulo, descricao, departamento, marca, price, qtd_stock, bar_codes, stock_control_enebled}); 
                        return res.status(201).json(result);
                    }
           
        } catch (error) {
            return res.status(500).json({ error });
        }
      },

    async update(req : Request, res : Response): Promise<Response> {
        try {
            const { id } = req.params
        let produto = await ProdutoModel.findByIdAndUpdate(id, req.body)
        
            return res.json(`Produto ${id} alterado!`)
        } catch (error) {
            return res.status(400).json({ error })
        }
        
    },

    async updateOne(req : Request, res : Response): Promise<Response> {
        try {
            const { id } = req.params
        let produto = await ProdutoModel.findByIdAndUpdate(id, req.body)
            return res.json(`Produto ${id} alterado!`)
        } catch (error) {
            return res.status(400).json({ error })
        }
        
    },


    async delete(req : Request, res : Response): Promise<Response> {
        try {
            const { id } = req.params
                let produto = await ProdutoModel.findByIdAndDelete(id)
            return res.status(204).json()
        } catch (error) {
            return res.status(400).json({ error })
        }
    },
}

export default ProdutoController
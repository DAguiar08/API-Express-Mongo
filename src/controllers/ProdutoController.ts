import { Request, Response } from "express"

const ProdutoController = {

    async index(req : Request, res : Response): Promise<Response> {
        let produtos = {}
            return res.json(produtos)
    }
}

export default ProdutoController
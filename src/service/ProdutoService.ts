import { IProduto, IProdutoResponse } from "../interfaces/ProdutoInterface";
import ProdutoRepository from "../repository/ProdutoRepository";

class ProdutoService {
    async create(payload: IProduto): Promise<IProdutoResponse> {
        const result = await ProdutoRepository.create(payload);
            return result;
    }
}

export default new ProdutoService();
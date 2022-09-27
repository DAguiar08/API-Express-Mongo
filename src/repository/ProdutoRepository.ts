import { IProduto, IProdutoResponse } from "../interfaces/ProdutoInterface";
import ProdutoModel from "../database/ProdutoModel";

class ProdutoRepository {
  async create(payload: IProduto): Promise<IProdutoResponse> {
    return ProdutoModel.create(payload);
  }
}

export default new ProdutoRepository();

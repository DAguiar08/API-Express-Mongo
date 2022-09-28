import { IProduto, IProdutoResponse } from "../interfaces/ProdutoInterface";
import ProdutoRepository from "../repository/ProdutoRepository";

class ProdutoService {
  async create(payload: IProduto): Promise<IProdutoResponse> {
    const result = await ProdutoRepository.create(payload);
    return result;
  }

  async find(payload: any): Promise<IProdutoResponse> {
    const result = await ProdutoRepository.find(payload);
    return result;
  }

  async findById(payload: any): Promise<IProduto> {
    const result = await ProdutoRepository.findById(payload);
    return result;
  }

  async delete(payload: any): Promise<IProdutoResponse> {
    const result = await ProdutoRepository.delete(payload);
    return result;
  }

  async update(payload: any): Promise<IProdutoResponse> {
    const result = await ProdutoRepository.uptade(payload);
    return result;
  }
}

export default new ProdutoService();

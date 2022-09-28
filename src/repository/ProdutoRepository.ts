import { IProduto, IProdutoResponse } from "../interfaces/ProdutoInterface";
import ProdutoModel from "../database/ProdutoModel";
import { any } from "joi";

class ProdutoRepository {
  async create(payload: IProduto): Promise<IProdutoResponse> {
    return ProdutoModel.create(payload);
  }

  async find(payload: any): Promise<any> {
    return ProdutoModel.find(payload).limit(50).sort({ qtd_stock: "asc" });
  }

  async findById(payload: any): Promise<any> {
    return ProdutoModel.findById(payload);
  }

  async delete(payload: any): Promise<any> {
    return ProdutoModel.findByIdAndDelete(payload);
  }

  async uptade(payload: IProduto): Promise<any> {
    return ProdutoModel.findByIdAndUpdate(payload);
  }
}

export default new ProdutoRepository();

/* eslint-disable @typescript-eslint/no-unused-vars */
import { IProduto, IProdutoResponse } from "../interfaces/ProdutoInterface";
import ProdutoModel from "../database/ProdutoModel";
import { FilterQuery } from "mongoose";
import Produto from "../database/ProdutoModel";

class ProdutoRepository {
  async create(payload: IProduto): Promise<IProdutoResponse> {
    return ProdutoModel.create(payload);
  }
  async find(
    payload: FilterQuery<IProduto>
  ): Promise<typeof Produto | unknown> {
    return await ProdutoModel.find(payload).limit(50);
  }

  async findLowStock(
    payload: FilterQuery<IProduto>
  ): Promise<typeof Produto | unknown> {
    return await ProdutoModel.find(payload)
      .limit(50)
      .sort({ qtd_stock: "asc" });
  }

  async findById(id: string): Promise<typeof Produto | null> {
    return ProdutoModel.findById(id);
  }

  async delete(id: string): Promise<typeof Produto | null> {
    return ProdutoModel.findByIdAndDelete(id);
  }

  async update(id: string, payload: IProduto): Promise<typeof Produto | null> {
    return ProdutoModel.findByIdAndUpdate(id, payload);
  }
}

export default new ProdutoRepository();

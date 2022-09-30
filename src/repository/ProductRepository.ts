/* eslint-disable @typescript-eslint/no-unused-vars */
import { IProduct, IProductResponse } from "../interfaces/ProductInterface";
import ProdutoModel from "../database/ProductModel";
import { FilterQuery } from "mongoose";
import Produto from "../database/ProductModel";

class ProdutoRepository {
  async create(payload: IProduct): Promise<IProductResponse> {
    return ProdutoModel.create(payload);
  }
  async find(
    payload: FilterQuery<IProduct>
  ): Promise<typeof Produto | unknown> {
    return await ProdutoModel.find(payload).limit(50);
  }

  async findLowStock(
    payload: FilterQuery<IProduct>
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

  async update(id: string, payload: IProduct): Promise<typeof Produto | null> {
    return ProdutoModel.findByIdAndUpdate(id, payload);
  }
}

export default new ProdutoRepository();

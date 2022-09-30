/* eslint-disable @typescript-eslint/no-unused-vars */
import { IProduct, IProductResponse } from "../interfaces/ProductInterface";
import ProductModel from "../database/ProductModel";
import { FilterQuery } from "mongoose";
import Product from "../database/ProductModel";

class ProductRepository {
  async create(payload: IProduct): Promise<IProductResponse> {
    return ProductModel.create(payload);
  }
  async find(
    payload: FilterQuery<IProduct>
  ): Promise<typeof Product | unknown> {
    return await ProductModel.find(payload).limit(50);
  }

  async findLowStock(
    payload: FilterQuery<IProduct>
  ): Promise<typeof Product | unknown> {
    return await ProductModel.find(payload)
      .limit(50)
      .sort({ qtd_stock: "asc" });
  }

  async findById(id: string): Promise<typeof Product | null> {
    return ProductModel.findById(id);
  }

  async delete(id: string): Promise<typeof Product | null> {
    return ProductModel.findByIdAndDelete(id);
  }

  async update(id: string, payload: IProduct): Promise<typeof Product | null> {
    return ProductModel.findByIdAndUpdate(id, payload);
  }
}

export default new ProductRepository();

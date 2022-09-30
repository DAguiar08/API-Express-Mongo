import ProdutoRepository from "../repository/ProductRepository";
import ProdutoModel from "../database/ProductModel";
import { Request, Response } from "express";

class ProductService {
  async create(req: Request, res: Response) {
    const payload = req.body;
    const ValidateCB = await ProdutoModel.findOne({
      bar_codes: payload.bar_codes,
    });
    if (ValidateCB) {
      throw console.error("This code bars already exist");
    } else {
      if (payload.qtd_stock < 1) {
        payload.stock_control_enebled = false;
      } else {
        payload.stock_control_enebled = true;
      }
      const result = await ProdutoRepository.create(payload);
      return res.status(201).json(result);
    }
  }

  async find(req: Request, res: Response) {
    const result = await ProdutoRepository.find({
      stock_control_enebled: true,
    });
    return res.status(200).json(result);
  }

  async findLowStock(req: Request, res: Response) {
    const result = await ProdutoRepository.findLowStock({
      stock_control_enebled: true,
      qtd_stock: { $lte: 100 },
    });
    return res.status(200).json(result);
  }

  async findById(req: Request, res: Response) {
    const Product = await ProdutoRepository.findById(req.params.id);
    return res.status(200).json(Product);
  }

  async delete(req: Request, res: Response) {
    await ProdutoRepository.delete(req.params.id);
    return res.status(200).json();
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const payload = req.body;
    const ValidateCB = await ProdutoModel.findOne({
      bar_codes: payload.bar_codes,
    });
    if (ValidateCB) {
      throw console.error("Esse código de This já existe");
    } else {
      if (payload.qtd_stock < 1) {
        payload.stock_control_enebled = false;
      } else {
        payload.stock_control_enebled = true;
      }
    }
    await ProdutoRepository.update(id, payload);
    return res.status(200).json(req.body);
  }
}

export default new ProductService();

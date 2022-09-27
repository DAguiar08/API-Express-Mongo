import { Request, Response } from "express";
import ProdutoModel from "../database/ProdutoModel";
import ProdutoService from "../service/ProdutoService";

const ProdutoController = {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const payload = req.query;
      const produtoFiltrado = await ProdutoModel.find({
        payload,
        stock_control_enebled: true,
      }).limit(50);
      return res.status(200).json(produtoFiltrado);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async findLowStock(req: Request, res: Response): Promise<Response> {
    try {
      const payload = req.query;
      const produto = await ProdutoModel.find({
        payload,
        stock_control_enebled: true,
        qtd_stock: { $lte: 100 },
      }).sort({ qtd_stock: "asc" });
      return res.status(200).json(produto);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const produto = await ProdutoModel.findById(id);
      return res.json(produto);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async create(req: Request, res: Response): Promise<Response> {
    try {
      let {
        titulo,
        descricao,
        departamento,
        marca,
        price,
        qtd_stock,
        bar_codes,
        stock_control_enebled,
      } = req.body;
      if (qtd_stock < 1) {
        stock_control_enebled = false;
      } else {
        stock_control_enebled = true;
      }
      const ValidaCB = await ProdutoModel.findOne({
        bar_codes: req.body.bar_codes,
      });
      if (ValidaCB) {
        return res.status(404).json("Esse código de barras já existe!");
      } else {
        const result = await ProdutoService.create({
          titulo,
          descricao,
          departamento,
          marca,
          price,
          qtd_stock,
          bar_codes,
          stock_control_enebled,
        });
        return res.status(201).json(result);
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      let { titulo, descricao, departamento, marca, price, qtd_stock } =
        req.body;
      if (qtd_stock < 1) {
        const alteraF = await ProdutoModel.findByIdAndUpdate(id, {
          stock_control_enebled: false,
        });
      } else {
        const alteraT = await ProdutoModel.findByIdAndUpdate(id, {
          stock_control_enebled: true,
        });
      }
      const produto = await ProdutoModel.findByIdAndUpdate(id, req.body);
      return res
        .status(200)
        .json({ titulo, descricao, departamento, marca, price, qtd_stock });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async updateOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      let { titulo, descricao, departamento, marca, price, qtd_stock } =
        req.body;
      if (qtd_stock < 1) {
        const alteraF = await ProdutoModel.findByIdAndUpdate(id, {
          stock_control_enebled: false,
        });
      } else {
        const alteraT = await ProdutoModel.findByIdAndUpdate(id, {
          stock_control_enebled: true,
        });
      }
      const produto = await ProdutoModel.findByIdAndUpdate(id, req.body);
      return res
        .status(200)
        .json({ titulo, descricao, departamento, marca, price, qtd_stock });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const produto = await ProdutoModel.findByIdAndDelete(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};

export default ProdutoController;

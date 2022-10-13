/* eslint-disable prefer-const */
import { Request, Response } from "express";
import ProductService from "../service/ProductService";

const ProductController = {
  async index(req: Request, res: Response) {
    try {
      const result = await ProductService.find(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async findLowStock(req: Request, res: Response) {
    try {
      const result = await ProductService.findLowStock();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async findById(req: Request, res: Response) {
    try {
      const result = await ProductService.findById(req);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({ error });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const payload = req.body
      const result = await ProductService.create(payload);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const payload = req.body;
      const { id } = req.params;
      const result = await ProductService.update(payload, id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({ error });
    }
  },

  async updateOne(req: Request, res: Response) {
    try {
      const payload = req.body
      const { id } = req.params;
      const result = await ProductService.update(payload, id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({ error });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await ProductService.delete(req);
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ error });
    }
  },

  async createCsv(req: Request, res: Response) {
    try {
      await ProductService.createCSV(req);
      return res.status(201).json("Produtos Cadastrados");
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};

export default ProductController;

/* eslint-disable prefer-const */
import { Request, Response } from "express";
import ProductService from "../service/ProductService";

const ProductController = {
  async index(req: Request, res: Response) {
    try {
      const result = await ProductService.find(req, res);
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async findLowStock(req: Request, res: Response) {
    try {
      const result = await ProductService.findLowStock(req, res);
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async findById(req: Request, res: Response) {
    try {
      const result = await ProductService.findById(req, res);
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ error });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const result = await ProductService.create(req, res);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const result = await ProductService.update(req, res);
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ error });
    }
  },

  async updateOne(req: Request, res: Response) {
    try {
      const result = await ProductService.update(req, res);
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ error });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await ProductService.delete(req, res);
      return res.status(200).json()
    } catch (error) {
      return res.status(404).json({ error });
    }
  },

  async createCsv(req: Request, res: Response) {
    try {
      await ProductService.createCSV(req, res);
      return res.status(201).json("Produtos Cadastrados")
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};

export default ProductController;

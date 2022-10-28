import { Request, Response } from "express";
import ProductService from "../service/ProductService";
import logger from "../loggers/Logger";
import ErrorLogger from "../loggers/ErrorLogger";


const ProductController = {
  async index(req: Request, res: Response) {
    try {
      const result = await ProductService.find(req.query);
      logger.info('Successfully got list of products')
      return res.status(200).json(result);
    } catch (error) {
      ErrorLogger.error(error)
      return res.status(error.errorStatus || 400).json(error.message || { error });
    }
  },

  async findLowStock(req: Request, res: Response) {
    try {
      const result = await ProductService.findLowStock(req.query);
      logger.info('Successfully got list of lowStock products')
      return res.status(200).json(result);
    } catch (error) {
      ErrorLogger.error(error)
      return res.status(error.errorStatus || 400).json(error.message || { error });
    }
  },

  async findById(req: Request, res: Response) {
    try {
      const result = await ProductService.findById(req);
      logger.info('Successfully got a product')
      return res.status(200).json(result);
    } catch (error) {
      ErrorLogger.error(error)
      return res.status(error.errorStatus || 400).json(error.message || { error });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const payload = req.body
      const result = await ProductService.create(payload);
      logger.info('Successfully created a product')
      return res.status(201).json(result);
    } catch (error) {
      ErrorLogger.error(error)
      return res.status(error.errorStatus || 500).json(error.message || { error });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const payload = req.body;
      const { id } = req.params;
      const result = await ProductService.update(payload, id);
      logger.info('Successfully updated a product')
      return res.status(200).json(result);
    } catch (error) {
      ErrorLogger.error(error)
      return res.status(error.errorStatus || 400).json(error.message || { error });
    }
  },

  async updateOne(req: Request, res: Response) {
    try {
      const payload = req.body
      const { id } = req.params;
      const result = await ProductService.update(payload, id);
      logger.info('Successfully updated a product')
      return res.status(200).json(result);
    } catch (error) {
      ErrorLogger.error(error)
      return res.status(error.errorStatus || 400).json(error.message || { error });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await ProductService.delete(req);
      logger.info('Successfully deleted a product')
      return res.status(204).send();
    } catch (error) {
      ErrorLogger.error(error)
      return res.status(error.errorStatus || 400).json(error.message || { error });
    }
  },

  async createCsv(req: Request, res: Response) {
    try {
      await ProductService.createCSV(req);
      logger.info('Successfully created a product')
      return res.status(201).json("Produtos Cadastrados");
    } catch (error) {
      ErrorLogger.error(error)
      return res.status(error.errorStatus || 400).json(error.message || { error });
    }
  },
};

export default ProductController;

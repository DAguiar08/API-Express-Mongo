/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductRepository from "../repository/ProductRepository";
import ProductModel from "../database/ProductModel";
import { Request } from "express";
import { readFile } from "fs/promises";
import Joi from "joi";
import { IProduct } from "../interfaces/ProductInterface";
import ValidateCB from "../../utils/ValidateCB";
import { ParsedQs } from "qs";

class ProductService {
  async create(payload: IProduct) {
      await ValidateCB(payload);
      payload.qtd_stock < 1 ? payload.stock_control_enebled = false : payload.stock_control_enebled = true;
      const result = await ProductRepository.create(payload);
      return result;
  }

  async find(payload: ParsedQs) {
    const result = await ProductRepository.find(payload);
    return result;
  }

  async findLowStock() {
    const result = await ProductRepository.findLowStock({
      stock_control_enebled: true,
      qtd_stock: { $lte: 100 },
    });
    return result;
  }

  async findById(req: Request) {
    const result = await ProductRepository.findById(req.params.id);
    return result;
  }

  async delete(req: Request) {
    const result = await ProductRepository.delete(req.params.id);
    return result;
  }

  async update(payload: IProduct, id: string) {
    await ValidateCB(payload)
    payload.qtd_stock < 1 ? payload.stock_control_enebled = false : payload.stock_control_enebled = true;
    const result = await ProductRepository.update(id, payload);
    return result;
  }

  async createCSV() {
    const readingFile = (await readFile("test.csv")).toString();
    const splitFile = readingFile.split("\r\n");
    const [header, ...files] = splitFile;
    const arr = [];
    const arr2 = [];
    const data = new Date();
    const schema = Joi.array().items(
      Joi.object({
        title: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        departament: Joi.string().required().trim(),
        brand: Joi.string().required().trim(),
        price: Joi.number().min(0.01).max(1000).required(),
        qtd_stock: Joi.number().max(100000).required(),
        bar_codes: Joi.string().length(13).required().trim(),
        stock_control_enebled: Joi.boolean(),
        created_at: Joi.date(),
      })
    );
    for (const i of files) {
      const splitFiles = i.split(",");
      const ValidateQS = Number(splitFiles[5]);
      const ValidateCB = await ProductModel.findOne({
        bar_codes: splitFiles[6],
      });
      if (ValidateQS < 1) {
        arr2.push({
          title: splitFiles[0],
          description: splitFiles[1],
          departament: splitFiles[2],
          brand: splitFiles[3],
          price: Number(splitFiles[4]),
          qtd_stock: Number(splitFiles[5]),
          bar_codes: splitFiles[6],
          stock_control_enebled: Boolean(false),
          created_at: data,
        });
        const { error } = await schema.validate(arr2, { abortEarly: false });
        if (error) {
          throw error;
        }
        if (ValidateCB) {
          throw console.error("This code bars already exists");
        } else {
          await ProductRepository.createCSV(arr2);
        }
      } else {
        arr.push({
          title: splitFiles[0],
          description: splitFiles[1],
          departament: splitFiles[2],
          brand: splitFiles[3],
          price: Number(splitFiles[4]),
          qtd_stock: Number(splitFiles[5]),
          bar_codes: splitFiles[6],
          stock_control_enebled: Boolean(true),
          created_at: data,
        });
        const { error } = await schema.validate(arr, { abortEarly: false });
        if (error) {
          throw error;
        }
        if (ValidateCB) {
          throw console.error("This code bars already exists");
        } else {
          await ProductRepository.createCSV(arr);
        }
      }
    }
  }
}

export default new ProductService();

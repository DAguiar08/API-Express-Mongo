/* eslint-disable prefer-const */
import { Request, Response } from "express";
import ProdutoModel from "../database/ProdutoModel";
import ProdutoService from "../service/ProdutoService";
import {readFile} from 'fs/promises'

const ProdutoController = {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const payload = req.query;
      const produtoFiltrado = await ProdutoService.find({
        payload,
        stock_control_enebled: true,
      });
      return res.status(200).json(produtoFiltrado);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async findLowStock(req: Request, res: Response): Promise<Response> {
    try {
      const payload = req.query;
      const produto = await ProdutoService.find({
        payload,
        stock_control_enebled: true,
        qtd_stock: { $lte: 100 },
      });
      return res.status(200).json(produto);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const produto = await ProdutoService.findById(id);
      return res.json(produto);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async create(req: Request, res: Response): Promise<Response> {
    try {
      let {
        title,
        description,
        departament,
        brand,
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
          title,
          description,
          departament,
          brand,
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
      let { title, description, departament, brand, price, qtd_stock } =
        req.body;
      if (qtd_stock < 1) {
         ProdutoModel.findByIdAndUpdate(id, {
          stock_control_enebled: false,
        });
      } else {
         ProdutoModel.findByIdAndUpdate(id, {
          stock_control_enebled: true,
        });
      }
       await ProdutoService.update(id);
      return res
        .status(200)
        .json({ title, description, departament, brand, price, qtd_stock });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async updateOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      let { title, description, departament, brand, price, qtd_stock } =
        req.body;
      if (qtd_stock < 1) {
          await ProdutoModel.findByIdAndUpdate(id, {
          stock_control_enebled: false,
        });
      } else {
        await ProdutoModel.findByIdAndUpdate(id, {
          stock_control_enebled: true,
        });
      }
       await ProdutoService.update(id);
      return res
        .status(200)
        .json({ title, description, departament, brand, price, qtd_stock });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await ProdutoService.delete(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async criaCsv(req: Request, res: Response){
    try {
      const readingFile = (await readFile('test.csv')).toString()
      const splitFile = readingFile.split('\r\n')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [header, ...files] = splitFile
      const arr = []     
      for(const i of files) {
        const splitFiles = i.split(',')
        arr.push({
          title:splitFiles[0],
          description:splitFiles[1],
          departament:splitFiles[2],
          brand: splitFiles[3],
          price: Number(splitFiles[4]),
          qtd_stock: Number(splitFiles[5]),
          bar_codes: splitFiles[6]
        })
      }
        const payload = arr
        console.log(payload)
        
    } catch (error) {
      return res.status(400).json("Import não deu certo")
    }
    
  
}
};

export default ProdutoController;

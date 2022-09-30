/* eslint-disable prefer-const */
import { Request, Response } from "express";
import ProdutoService from "../service/ProdutoService";
import { readFile } from "fs/promises";

const ProdutoController = {
  async index(req: Request, res: Response) {
    try {
      await ProdutoService.find(req, res);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async findLowStock(req: Request, res: Response) {
    try {
      await ProdutoService.findLowStock(req, res);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async findById(req: Request, res: Response) {
    try {
      await ProdutoService.findById(req, res);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async create(req: Request, res: Response) {
    try {
      await ProdutoService.create(req, res);
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  async update(req: Request, res: Response) {
    try {
      await ProdutoService.update(req, res);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async updateOne(req: Request, res: Response) {
    try {
      await ProdutoService.update(req, res);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await ProdutoService.delete(req, res);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async criaCsv(req: Request, res: Response) {
    try {
      const readingFile = (await readFile("test.csv")).toString();
      const splitFile = readingFile.split("\r\n");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [header, ...files] = splitFile;
      const arr = [];
      for (const i of files) {
        const splitFiles = i.split(",");
        arr.push({
          title: splitFiles[0],
          description: splitFiles[1],
          departament: splitFiles[2],
          brand: splitFiles[3],
          price: Number(splitFiles[4]),
          qtd_stock: Number(splitFiles[5]),
          bar_codes: splitFiles[6],
        });
      }
      const payload = arr;
      console.log(payload);
    } catch (error) {
      return res.status(400).json("Import não deu certo");
    }
  },
};

export default ProdutoController;

import ProductRepository from "../repository/ProductRepository";
import { Request } from "express";
import { IProduct } from "../interfaces/ProductInterface";
import { ParsedQs } from "qs";
import BadRequest from "../errors/BadRequest";
import NotFound from "../errors/NotFound";
import ValidateDKProduct from "../utils/ValidateDKProduct";

class ProductService {
  async create(payload: IProduct) {
      await ValidateDKProduct(payload)
      payload.qtd_stock < 1 ? payload.stock_control_enebled = false : payload.stock_control_enebled = true;
      const result = await ProductRepository.create(payload);
      if(!result) throw new BadRequest(payload)
      return result;
  }

  async find(payload: ParsedQs) {
    const result = await ProductRepository.find(payload);
    if(!result) throw new NotFound(payload)
    return result;
  }

  async findLowStock(payload: ParsedQs) {
    const result = await ProductRepository.findLowStock({
      stock_control_enebled: true,
      qtd_stock: { $lte: 100 },
    });
    if(!result) throw new NotFound(payload)
    return result;
  }

  async findById(req: Request) {
    const result = await ProductRepository.findById(req.params.id);
    if(!result) throw new NotFound(req.params.id)
    return result;
  }

  async delete(req: Request) {
    const result = await ProductRepository.delete(req.params.id);
    if(!result) throw new NotFound(req.params.id)
    return result;
  }

  async update(payload: IProduct, id: string) {
    await ValidateDKProduct(payload)
    payload.qtd_stock < 1 ? payload.stock_control_enebled = false : payload.stock_control_enebled = true;
    const result = await ProductRepository.update(id, payload);
    if(!result) throw new NotFound(id)
    return result;
  }

  async createCSV(req: Request) {
    const csv = req.file.buffer
    const parse= csv.toString()
    const splitFile = parse.split("\r\n");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [header, ...files] = splitFile;
    const FilesArr = [];
    const FilesArr2 = [];
    const TodayDate = new Date();
    for (const file of files) {
      const splitFiles = file.split(",");
      const ValidateQS = Number(splitFiles[5]);
      if (ValidateQS < 1) {
        FilesArr.push({
          title: splitFiles[0],
          description: splitFiles[1],
          departament: splitFiles[2],
          brand: splitFiles[3],
          price: Number(splitFiles[4]),
          qtd_stock: Number(splitFiles[5]),
          bar_codes: splitFiles[6],
          stock_control_enebled: Boolean(false),
          created_at: TodayDate,
        });
      } else {
        FilesArr2.push({
          title: splitFiles[0],
          description: splitFiles[1],
          departament: splitFiles[2],
          brand: splitFiles[3],
          price: Number(splitFiles[4]),
          qtd_stock: Number(splitFiles[5]),
          bar_codes: splitFiles[6],
          stock_control_enebled: Boolean(true),
          created_at: TodayDate,
        });
      }
    }
    const FilesArr3 = [...FilesArr, ...FilesArr2]
    await ProductRepository.createCSV(FilesArr3);
  }
}

export default new ProductService();

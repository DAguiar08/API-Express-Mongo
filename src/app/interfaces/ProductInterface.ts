import { Types } from "mongoose";

export interface IProduct {
  title: string;
  description: string;
  departament: string;
  brand: string;
  price: number;
  qtd_stock: number;
  bar_codes: string;
  stock_control_enebled: boolean;
}

export interface IProductResponse {
  title?: string;
  description?: string;
  departament?: string;
  brand?: string;
  price?: number;
  qtd_stock?: number;
  bar_codes?: string;
  stock_control_enebled?: boolean;
  __v?: number;
  _id: Types.ObjectId;
}


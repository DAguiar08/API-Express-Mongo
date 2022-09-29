import { Types } from "mongoose";

export interface IProduto {
  title: string;
  description: string;
  departament: string;
  brand: string;
  price: number;
  qtd_stock: number;
  bar_codes: string;
  stock_control_enebled: boolean;
}

export interface IProdutoResponse {
  title?: string;
  description?: string;
  departament?: string;
  brand?: string;
  price?: number;
  qtd_stock?: number;
  bar_codes?: string;
  stock_control_enebled?: boolean;
  __v?: number;
  _id?: Types.ObjectId;
}

export interface csv {
  title: string;
  description: string;
  departament: string;
  brand: string;
  price: number;
  qtd_stock: number;
  bar_codes: string;
}

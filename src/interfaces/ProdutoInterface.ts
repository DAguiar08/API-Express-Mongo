import { Types } from "mongoose";

export interface IProduto {
  titulo: string;
  descricao: string;
  departamento: string;
  marca: string;
  price: number;
  qtd_stock: number;
  bar_codes: string;
  stock_control_enebled: boolean;
}

export interface IProdutoResponse {
  titulo?: string;
  descricao?: string;
  departamento?: string;
  marca?: string;
  price?: number;
  qtd_stock?: number;
  bar_codes?: string;
  stock_control_enebled?: boolean;
  __v?: number;
  _id?: Types.ObjectId;
}

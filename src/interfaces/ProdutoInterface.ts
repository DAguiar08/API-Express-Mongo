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

    _id?: Types.ObjectId;
    titulo?: string;
    descricao?: string;
    departamento?: string;
    marca?: string;
    price?: number;
    qtd_stock?: number;
    bar_codes?: string;
    __v?: number;
    stock_control_enebled?: boolean;

}
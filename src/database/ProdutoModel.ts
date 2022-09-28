import { Schema } from "mongoose";
import mongoose from "mongoose";
import { IProduto } from "../interfaces/ProdutoInterface";

const ProdutoModel = new Schema(
  {
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    departamento: { type: String, required: true },
    marca: { type: String, required: true },
    price: { type: Number, required: true },
    qtd_stock: { type: Number, required: true },
    bar_codes: { type: String, required: true },
    stock_control_enebled: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Produto = mongoose.model<IProduto>("Produto", ProdutoModel);

export default Produto;

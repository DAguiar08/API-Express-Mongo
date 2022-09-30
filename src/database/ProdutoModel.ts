import { Schema } from "mongoose";
import mongoose from "mongoose";
import { IProduto } from "../interfaces/ProdutoInterface";

const ProdutoModel = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    departament: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0.01, max: 1000 },
    qtd_stock: { type: Number, required: true, max: 100000 },
    bar_codes: { type: String, required: true, trim: true },
    stock_control_enebled: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Produto = mongoose.model<IProduto>("Produto", ProdutoModel);

export default Produto;

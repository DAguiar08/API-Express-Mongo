import { Schema } from "mongoose";
import mongoose from "mongoose";
import { IProduct } from "../interfaces/ProductInterface";

const ProductModel = new Schema(
  {
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    departament: { type: String, trim: true, required: true },
    brand: { type: String, trim: true, required: true },
    price: { type: Number, min: 0.01, max: 1000, required: true },
    qtd_stock: { type: Number, max: 100000, required: true },
    bar_codes: { type: String, trim: true, required: true, unique: true },
    stock_control_enebled: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<IProduct>("Product", ProductModel);

export default Product;

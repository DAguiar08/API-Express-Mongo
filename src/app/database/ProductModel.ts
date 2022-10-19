import { Schema } from "mongoose";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"


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

ProductModel.plugin(mongoosePaginate)

const Product = mongoose.model("Product", ProductModel);

export default Product;

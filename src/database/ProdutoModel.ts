import { Schema } from "mongoose";
import mongoose from 'mongoose'

const ProdutoModel = new Schema({

    titulo: {type: String},
    descricao: {type: String},
    departamento: {type: String},
    marca: {type: String},
    price: {type: Number},
    qtd_stock: {type: Number},
    bar_codes: {type: String},
}, 
{
    timestamps: true
});
 
export default mongoose.model('Produto', ProdutoModel)
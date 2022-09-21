import { Schema } from "mongoose";
import mongoose from 'mongoose'

const ProdutoModel = new Schema({

    titulo: String,
    descricao: String,
    departamento: String,
    marca: String,
    price: Number,
    qtd_stock: Number,
    bar_codes: String,
}, 
{
    timestamps: true
})

export default mongoose.model('Produto', ProdutoModel)
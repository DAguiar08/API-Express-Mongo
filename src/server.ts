import express from 'express';
import mongoose from 'mongoose'

const app = express()

mongoose.connect('mongodb+srv://daguiar:Aguiar88@cluster0.etixs0l.mongodb.net/test')
.then((data)=>{
    console.log('MongoDB Connection Succeded')
})

.catch((err)=> {
    console.log('Error in DB connection')
})

app.listen(3000)
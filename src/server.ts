import express, { Router } from 'express';
import mongoose from 'mongoose'
import router from './routes';

const app = express()

app.use(express.json())
app.use(router)

mongoose.connect('mongodb+srv://daguiar:Aguiar88@cluster0.etixs0l.mongodb.net/test')
.then((data)=>{
    console.log('MongoDB Connection Succeded')
})

.catch((err)=> {
    console.log('Error in DB connection')
})

app.listen(3000)
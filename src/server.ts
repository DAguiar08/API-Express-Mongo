/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import mongoose from "mongoose";
import router from "./routes";
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"

const app = express();

app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

mongoose
  .connect("mongodb+srv://daguiar:Aguiar88@cluster0.etixs0l.mongodb.net/test")
  .then((data) => {
    console.log("MongoDB Connection Succeded");
  })

  .catch((err) => {
    console.log("Error in DB connection");
  });

app.listen(3000);

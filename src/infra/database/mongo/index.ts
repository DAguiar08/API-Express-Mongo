import mongoose from "mongoose";

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(
      process.env.MONGO_DB_URL ||
        "mongodb+srv://daguiar:Aguiar88@cluster0.etixs0l.mongodb.net/test"
    );
  }
}

export default new Database().connect();

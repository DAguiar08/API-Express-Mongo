import mongoose from "mongoose";
import config   from "../../../config/database"

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(
      process.env.MONGO_DB_URL ||
      `mongodb+srv://${config.database.username}:${config.database.password}@cluster0.etixs0l.mongodb.net/${config.database.collection}`
    );
  }
}

export default new Database().connect();

import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient
  .connect()
  .then(() => {
    db = mongoClient.db("plainstore");
  })
  .catch((e) => {
    console.log(e);
  });

export { db };

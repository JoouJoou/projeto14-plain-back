import { db } from "../database/db.js";

export async function insertProduct(req, res) {
  try {
    const checkExistence = await db
      .collection("storage")
      .findOne({ name: req.body.name });
    if (!checkExistence) {
      await db.collection("storage").insertOne(req.body);
      return res.sendStatus(201);
    }
    return res.sendStatus(409);
  } catch {
    return res.sendStatus(500);
  }
}

export async function getProducts(req, res) {
  try {
    const storage = await db.collection("storage").find().toArray();
    return res.status(200).send(storage);
  } catch {
    return res.sendStatus(500);
  }
}

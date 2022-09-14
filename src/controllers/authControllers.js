import bcrypt from "bcrypt";

import { db } from "../database/db.js";

const signUp = async (req, res) => {
  const body = req.body;

  try {
    const emailExiste = await db
      .collection("users")
      .find({ email: body.email })
      .toArray();

    if (emailExiste.length != 0) {
      return res.status(409).send("Email já cadastrado");
    }

    delete body.confirm_password;
    await db
      .collection("users")
      .insertOne({ ...body, password: bcrypt.hashSync(body.password, 10) });

    return res.sendStatus(201);
  } catch (e) {
    res.status(500).send(e);
    console.log(e);
  }
};

export { signUp };

import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
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

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.status(422).send("Email não cadastrado");
    }

    const senhaCorreta = bcrypt.compareSync(password, user.password);
    if (!senhaCorreta) {
      return res.status(422).send("Email ou senha incorretos");
    }
    const token = uuid();

    await db.collection("sessions").insertOne({ token, userId: user._id });

    delete user.password;
    delete user._id;

    return res.send({ token, user });
  } catch (e) {
    return res.status(500).send(e);
  }
};

const updateUser = async (req, res) => {
  try {
    const element = req.body;
    console.log(req.headers);
    const user = await db.collection("users").findOne({ email: element.email });
    if (!user) {
      return res.sendStatus(404);
    }
    const userEmail = element.email;
    delete element.email;
    await db.collection("users").updateOne(
      {
        email: userEmail,
      },
      { $set: element }
    );
    return res.sendStatus(200);
  } catch {
    return res.status(500).send(e);
  }
};

export { signUp, signIn, updateUser };

import { db } from "../database/db.js";

export async function validateToken(req, res, next) {
  const { authorization } = req.headers;
  console.log(authorization);
  const token = authorization?.replace("Bearer ", "");
  const session = await db.collection("sessions").findOne({ token });
  if (!authorization) {
    return res.status(401).send("Headers missing");
  }
  if (!session) {
    return res.sendStatus(401);
  }

  res.locals.session = session;

  next();
}

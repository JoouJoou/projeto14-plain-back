import { Router } from "express";
import { signIn, signUp, updateUser } from "../controllers/authControllers.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import {
  loginSchema,
  newUserSchema,
  updateSchema,
} from "../schemas/authSchemas.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(newUserSchema), signUp);
authRouter.post("/sign-in", validateSchema(loginSchema), signIn);
authRouter.put("/profile-update", validateSchema(updateSchema), updateUser);

export default authRouter;

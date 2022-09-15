import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { loginSchema, newUserSchema } from "../schemas/authSchemas.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(newUserSchema), signUp);

authRouter.post("/sign-in", validateSchema(loginSchema), signIn);

export default authRouter;

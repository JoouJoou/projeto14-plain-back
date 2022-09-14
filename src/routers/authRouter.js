import { Router } from "express";
import { signUp } from "../controllers/authControllers.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { loginSchema, newUserSchema } from "../schemas/authSchemas.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(newUserSchema), signUp);

authRouter.post("sign-in", validateSchema(loginSchema), (req, res) => {});

export default authRouter;

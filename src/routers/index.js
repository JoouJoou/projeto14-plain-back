import express from "express";

import authRouter from "./authRouter.js";

const router = express.Router();

router.use(authRouter);

export default router;

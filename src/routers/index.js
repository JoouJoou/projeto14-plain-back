import express from "express";
import authRouter from "./authRouter.js";
import productsRouter from "./productsRouter.js";

const router = express.Router();

router.use(authRouter);
router.use(productsRouter);

export default router;

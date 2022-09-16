import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { insertProductSchema } from "../schemas/productsSchemas.js";
import {
  insertProduct,
  getProducts,
} from "../controllers/productControllers.js";

const productsRouter = Router();

productsRouter.post(
  "/products",
  validateSchema(insertProductSchema),
  insertProduct
);

productsRouter.get("/products", getProducts);

export default productsRouter;
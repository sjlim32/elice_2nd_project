import express from "express";
import { adminOnly } from "../middlewares";
import { categoryController } from "../controllers";

const categoryRouter = express.Router();

// req.body가 json인지 확인하는 validator middleware 추가하기

categoryRouter.post(
  "/categories",
  adminOnly,
  categoryController.addCategory,
);
categoryRouter.get("/categories", categoryController.getCategories);
categoryRouter.get("/categories/:categoryId", categoryController.getCategory);
categoryRouter.patch(
  "/categories/:categoryId",
  adminOnly,
  categoryController.setCategory,
);
categoryRouter.delete(
  "/categories/:categoryId",
  adminOnly,
  categoryController.deleteCategory,
);

export { categoryRouter };

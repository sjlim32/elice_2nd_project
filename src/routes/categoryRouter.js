import express from "express";
import { categoryController } from "../controllers";

const categoryRouter = express.Router();

// req.body가 json인지 확인하는 validator middleware 추가하기

categoryRouter.post("/categories", categoryController.addCategory);
categoryRouter.get("/categories", categoryController.getCategories);
categoryRouter.get("/categories/:categoryId", categoryController.getCategory);
categoryRouter.patch("/categories/:categoryId", categoryController.setCategory);
categoryRouter.delete(
  "/categories/:categoryId",
  categoryController.deleteCategory,
);

export { categoryRouter };

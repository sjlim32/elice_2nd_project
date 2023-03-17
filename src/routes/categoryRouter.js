import express from "express";
import { checkAppjson, loginRequired, adminOnly } from "../middlewares";
import { categoryController } from "../controllers";

const categoryRouter = express.Router();

// req.body가 json인지 확인하는 validator middleware 추가하기

categoryRouter.post(
  "/categories",
  loginRequired,
  adminOnly,
  checkAppjson,
  categoryController.addCategory,
);
categoryRouter.get("/categories", categoryController.getCategories);
categoryRouter.get("/categories/:categoryId", categoryController.getCategory);
categoryRouter.patch(
  "/categories/:categoryId",
  loginRequired,
  adminOnly,
  checkAppjson,
  categoryController.setCategory,
);
categoryRouter.delete(
  "/categories/:categoryId",
  loginRequired,
  adminOnly,
  categoryController.deleteCategory,
);

export { categoryRouter };

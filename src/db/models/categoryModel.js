import { model } from "mongoose";
import { categorySchema } from "../schemas";

const Category = model("Category", categorySchema);

class CategoryModel {
  async create(categoryInfo) {
    const createdCategory = await Category.create(categoryInfo);
    return createdCategory;
  }
}

const categoryModel = new CategoryModel();

export { categoryModel };

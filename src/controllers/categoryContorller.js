import { categoryService } from "../services";

class CategoryController {
  constructor(CategoryService) {
    this.categoryService = CategoryService;
    this.addCategory = this.addCategory.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  async addCategory(req, res, next) {
    try {
      const { title } = req.body;

      const newCategory = await this.categoryService.addCategory({ title });

      res.status(200).json(newCategory);
    } catch (error) {
      next(error);
    }
  }

  async getCategories(req, res, next) {
    try {
      const categories = await this.categoryService.getCategories();

      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  async getCategory(req, res, next) {
    try {
      const { categoryId } = req.params;

      const category = await this.categoryService.getCategory(categoryId);

      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  async setCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      const { title } = req.body;

      // 수정하는 값이 undefined인지, 공백으로 구성된 문자열인지 확인하는 작업 추가 필요

      const result = await categoryService.setCategory(categoryId, title);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      const result = await this.categoryService.deleteCategory(categoryId);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

const categoryController = new CategoryController(categoryService);

export { categoryController };

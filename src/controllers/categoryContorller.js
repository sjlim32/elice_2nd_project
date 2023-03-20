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
      const categoryInfo = req.body;
      req.data = await this.categoryService.addCategory(categoryInfo);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getCategories(req, res, next) {
    try {
      req.data = await this.categoryService.getCategories();
      next();
    } catch (error) {
      next(error);
    }
  }

  async getCategory(req, res, next) {
    const { categoryId } = req.params;
    try {
      req.data = await this.categoryService.getCategory(categoryId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async setCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      const toUpdate = req.body;
      const newToUpdate = Object.fromEntries(
        Object.entries(toUpdate).filter(([key, value]) =>
          value ? toString(value).trim() : false,
        ),
      );
      req.data = await categoryService.setCategory(
        categoryId,
        newToUpdate,
      );
      next();
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      req.data = await this.categoryService.deleteCategory(categoryId);
      next();
    } catch (error) {
      next(error);
    }
  }
}

const categoryController = new CategoryController(categoryService);

export { categoryController };

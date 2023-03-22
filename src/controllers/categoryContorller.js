import { categoryService } from "../services";

class CategoryController {
  constructor(CategoryService) {
    this.categoryService = CategoryService;
  }

  async addCategory(req, res, next) {
    try {
      const categoryInfo = req.body;
      req.data = await categoryService.addCategory(categoryInfo);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getCategories(req, res, next) {
    try {
      req.data = await categoryService.getCategories();
      next();
    } catch (error) {
      next(error);
    }
  }

  async getCategory(req, res, next) {
    const { categoryId } = req.params;
    try {
      req.data = await categoryService.getCategory(categoryId);
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
        Object.entries(toUpdate).filter(([, value]) =>
          value ? toString(value).trim() : false,
        ),
      );
      req.data = await categoryService.setCategory(categoryId, newToUpdate);
      next();
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      req.data = await categoryService.deleteCategory(categoryId);
      next();
    } catch (error) {
      next(error);
    }
  }
}

const categoryController = new CategoryController(categoryService);

export { categoryController };

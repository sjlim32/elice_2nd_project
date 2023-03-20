import { categoryModel, postModel } from "../db";

class CategoryService {
  constructor(CategoryModel, PostModel) {
    this.categoryModel = CategoryModel;
    this.postModel = PostModel;
  }

  async addCategory(categoryInfo) {
    const { title } = categoryInfo;

    const found = await categoryModel.findByTitle(title);
    if (found) {
      throw new Error(`이미 존재하는 카테고리입니다.`);
    }

    const createdNewCategory = await categoryModel.create(categoryInfo);
    return createdNewCategory;
  }

  async getCategories() {
    const categories = await categoryModel.findAll();
    return categories;
  }

  async getCategory(categoryId) {
    const category = await categoryModel.findById(categoryId);
    if (!category) {
      throw new Error(`해당 카테고리가 존재하지 않습니다.`);
    }
    return category;
  }

  async setCategory(categoryId, toUpdate) {
    const category = await categoryModel.findByTitle(toUpdate.title);
    if (category) {
      if (category.id !== categoryId) {
        throw new Error(`같은 이름의 카테고리가 이미 존재합니다.`);
      }
    }
    const { matchedCount, modifiedCount } = await categoryModel.updateById(
      categoryId,
      toUpdate,
    );

    if (matchedCount === 0) {
      throw new Error(`해당 카테고리가 존재하지 않습니다.`);
    }

    if (modifiedCount === 0) {
      return { result: `수정된 내용이 없습니다.` };
    }
    return { result: `수정이 완료 되었습니다.` };
  }

  async deleteCategory(categoryId) {
    const found = await postModel.findByCategory(categoryId);
    if (found) {
      throw new Error(`카테고리에 게시글이 존재해 삭제할 수 없습니다.`);
    }

    const { deletedCount } = await categoryModel.deleteById(categoryId);
    if (deletedCount === 0) {
      throw new Error(`카테고리 삭제에 실패했습니다.`);
    }
    return { result: `카테고리 삭제를 완료하였습니다.` };
  }
}

const categoryService = new CategoryService(categoryModel, postModel);

export { categoryService };

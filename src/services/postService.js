import { postModel, categoryModel, replyModel } from "../db";

class PostService {
  constructor(PostModel, CategoryModel, ReplyModel) {
    this.postModel = PostModel;
    this.categoryModel = CategoryModel;
    this.replyModel = ReplyModel;
  }

  async Parameter(option, page, perPage) {
    const count = await postModel.countDocuments(option);
    const pageNumber = Number(page) || 1;
    const perPageNumber = Number(perPage) > 0 ? Number(perPage) : count;

    const totalPage = Math.ceil(count / perPageNumber);
    if (pageNumber > totalPage) {
      throw new Error(`최대 페이지 수는 ${totalPage}입니다.`);
    }

    const skipDocuments = perPageNumber * (pageNumber - 1);
    return [perPageNumber, skipDocuments];
  }

  getPartial(posts) {
    const partialPosts = posts.map(post => {
      const { _id, title, userId, categoryId, createdAt } = post;
      const { id, email, role } = userId;
      return {
        _id,
        title,
        categoryId: { _id: categoryId.id, title: categoryId.title },
        userId: { _id: id, email, role },
        createdAt,
      };
    });
    return partialPosts;
  }

  async addPost(postInfo) {
    const createdNewPost = await postModel.create(postInfo);
    return createdNewPost;
  }

  async getPosts(page, perPage) {
    const option = { isDeleted: false };
    const params = await this.Parameter(option, page, perPage);
    const posts = await postModel.findAll(...params);
    const partialPosts = this.getPartial(posts);
    return partialPosts;
  }

  async getPostsByCategory(categoryId, page, perPage) {
    const category = await categoryModel.findById(categoryId);
    if (!category) {
      throw new Error(`해당 카테고리가 존재하지 않습니다.`);
    }

    const option = { isDeleted: false, categoryId };
    const params = await this.Parameter(option, page, perPage);
    const posts = await postModel.findAllByCategory(categoryId, ...params);
    const partialPosts = this.getPartial(posts);
    return partialPosts;
  }

  async getMyPosts(userId) {
    const posts = await postModel.findAllByUser(userId);
    const partialPosts = posts.map(post => {
      const { _id, title, categoryId } = post;
      const categoryTitle = categoryId.title;
      return { _id, title, categoryId, categoryTitle };
    });
    return partialPosts;
  }

  async getPostsByTitleSearching(search, page, perPage) {
    const reg = new RegExp(search.trim(), "i");
    const option = { isDeleted: false, title: { $regex: reg } };
    const params = await this.Parameter(option, page, perPage);
    const posts = await postModel.findAllByTitleSearching(reg, ...params);
    const partialPosts = this.getPartial(posts);
    return partialPosts;
  }

  async getPost(postId) {
    const post = await postModel.findById(postId);
    if (!post) {
      throw new Error(`존재하지 않는 게시글입니다.`);
    }

    const partialPost = this.getPartial([post])[0];
    partialPost.contents = post.contents;
    return partialPost;
  }

  async setPost(user, postId, toUpdate) {
    const post = await postModel.findById(postId);
    if (!post) {
      throw new Error(`존재하지 않는 게시글입니다.`);
    }

    const { userId, role } = user;
    // 관리자 또는 글쓴이가 아니라면 수정 권한 없음
    if (post.userId._id != userId && role !== "admin") {
      throw new Error(`게시글을 수정할 권한이 없습니다.`);
    }

    const { modifiedCount } = await postModel.updateById(postId, toUpdate);
    if (modifiedCount === 0) {
      return { result: `수정된 내용이 없습니다.` };
    }
    return { result: `수정이 완료 되었습니다.` };
  }

  async deletePost(user, postId) {
    const post = await postModel.findById(postId);
    if (!post) {
      throw new Error(`존재하지 않는 게시글입니다.`);
    }

    const { userId, role } = user;
    // 관리자 또는 글쓴이가 아니라면 삭제 권한 없음
    if (post.userId._id != userId && role !== "admin") {
      throw new Error(`게시글을 삭제할 권한이 없습니다.`);
    }

    const { modifiedCount } = await this.postModel.softDeleteById(postId);
    if (modifiedCount === 0) {
      throw new Error(`게시글 삭제에 실패했습니다.`);
    }

    // 해당 게시글의 댓글도 삭제 처리
    await replyModel.softDeleteByPost(postId);

    return { result: `게시글 삭제를 완료하였습니다.` };
  }
}

const postService = new PostService(postModel, categoryModel, replyModel);

export { postService };

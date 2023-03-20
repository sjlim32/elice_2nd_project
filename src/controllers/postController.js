import { postService } from "../services";

class PostController {
  constructor(PostService) {
    this.postService = PostService;
  }

  async addPost(req, res, next) {
    try {
      const postInfo = req.body;
      postInfo.userId = req.user.userId;
      req.data = await postService.addPost(postInfo);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getPosts(req, res, next) {
    try {
      const { page, perPage } = req.query;
      req.data = await postService.getPosts(page, perPage);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getPostsByCategory(req, res, next) {
    try {
      const { page, perPage } = req.query;
      const { categoryId } = req.params;
      req.data = await postService.getPostsByCategory(
        categoryId,
        page,
        perPage,
      );
      next();
    } catch (error) {
      next(error);
    }
  }

  async getMyPosts(req, res, next) {
    try {
      const { userId } = req.user;
      req.data = await postService.getMyPosts(userId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getPostsByTitleSearching(req, res, next) {
    try {
      const { page, perPage } = req.query;
      const { search } = req.params;
      req.data = await postService.getPostsByTitleSearching(
        search,
        page,
        perPage,
      );
      next();
    } catch (error) {
      next(error);
    }
  }

  async getPost(req, res, next) {
    try {
      const { postId } = req.params;
      req.data = await postService.getPost(postId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async setPost(req, res, next) {
    try {
      const user = req.user;
      const { postId } = req.params;
      const toUpdate = req.body;
      const newToUpdate = Object.fromEntries(
        Object.entries(toUpdate).filter(([key, value]) =>
          value ? toString(value).trim() : false,
        ),
      );
      req.data = await postService.setPost(user, postId, newToUpdate);
      next();
    } catch (error) {
      next(error);
    }
  }

  async deletePost(req, res, next) {
    try {
      const user = req.user;
      const { postId } = req.params;
      req.data = await postService.deletePost(user, postId);
      next();
    } catch (error) {
      next(error);
    }
  }
}

const postController = new PostController(postService);

export { postController };

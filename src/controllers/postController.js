import { postService } from "../services";

class PostController {
  constructor(PostService) {
    this.postService = PostService;
    this.addPost = this.addPost.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.getPostsByCategory = this.getPostsByCategory.bind(this);
    this.getMyPosts = this.getMyPosts.bind(this);
    this.getPostsByTitleSearching = this.getPostsByTitleSearching.bind(this);
    this.getPost = this.getPost.bind(this);
    this.setPost = this.setPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  async addPost(req, res, next) {
    try {
      const postInfo = req.body;
      postInfo.userId = req.user.userId;
      req.data = await this.postService.addPost(postInfo);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getPosts(req, res, next) {
    try {
      req.data = await this.postService.getPosts();
      next();
    } catch (error) {
      next(error);
    }
  }

  async getPostsByCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      req.data = await this.postService.getPostsByCategory(categoryId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getMyPosts(req, res, next) {
    try {
      const { userId } = req.user;
      req.data = await this.postService.getMyPosts(userId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getPostsByTitleSearching(req, res, next) {
    try {
      const { search } = req.params;
      req.data = await this.postService.getPostsByTitleSearching(search);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getPost(req, res, next) {
    try {
      const { postId } = req.params;
      req.data = await this.postService.getPost(postId);
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
      req.data = await this.postService.setPost(user, postId, newToUpdate);
      next();
    } catch (error) {
      next(error);
    }
  }

  async deletePost(req, res, next) {
    try {
      const user = req.user;
      const { postId } = req.params;
      req.data = await this.postService.deletePost(user, postId);
      next();
    } catch (error) {
      next(error);
    }
  }
}

const postController = new PostController(postService);

export { postController };

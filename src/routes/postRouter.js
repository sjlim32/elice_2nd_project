import express from "express";
import { checkAppjson, loginRequired } from "../middlewares";
import { postController } from "../controllers";

const postRouter = express.Router();

// req.body가 json인지 확인하는 validator middleware 추가하기
// loginRequired, isAdmin 등 middleware 추가하기

postRouter.post("/posts", loginRequired, checkAppjson, postController.addPost);
postRouter.get("/posts", postController.getPosts);
postRouter.get(
  "/posts/category/:categoryId",
  postController.getPostsByCategory,
);
postRouter.get("/posts/myposts", loginRequired, postController.getMyPosts);
postRouter.get(
  "/posts/search/:search",
  postController.getPostsByTitleSearching,
);
postRouter.get("/posts/:postId", postController.getPost);
postRouter.patch(
  "/posts/:postId",
  loginRequired,
  checkAppjson,
  postController.setPost,
);
postRouter.delete("/posts/:postId", loginRequired, postController.deletePost);

export { postRouter };

import express from "express";
import { replyController } from "../controllers";
import { checkAppjson, adminOnly, loginRequired } from "../middlewares";

const replyRouter = express.Router();

replyRouter.post(
  "/replies",
  loginRequired,
  checkAppjson,
  replyController.addReply,
);
replyRouter.get(
  "/replies",
  loginRequired,
  adminOnly,
  replyController.getReplies,
);
replyRouter.get("/posts/:postId/replies", replyController.getRepliesByPost);
replyRouter.get(
  "/replies/myreplies",
  loginRequired,
  replyController.getMyReplies,
);
replyRouter.get("/replies/:replyId", replyController.getReply);
replyRouter.patch(
  "/replies/:replyId",
  loginRequired,
  checkAppjson,
  replyController.setReply,
);
replyRouter.delete(
  "/replies/:replyId",
  loginRequired,
  replyController.deleteReply,
);

export { replyRouter };

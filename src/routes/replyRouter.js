import express from "express";
import { replyController } from "../controllers";
import { checkAppjson, adminOnly, loginRequired } from "../middlewares";

const replyRouter = express.Router();

/*
1. 댓글 추가(userId받고, parentId받고..)
2. 전체 댓글 조회?? admin만
3. 선택한 게시글의 전체 댓글 조회 (삭제된 건 어떻게 처리?)
댓글이랑 대댓글 어떻게 나눠서 넘기지?
4. 내가 쓴 댓글 전체 조회(isDeleted=false)
5. 선택한 댓글 조회
6. 선택한 댓글 수정
7. 선택한 댓글 댓글 삭제
*/

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

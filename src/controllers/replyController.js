import { replyService } from "../services";

class ReplyController {
  constructor(ReplyService) {
    this.replyService = ReplyService;
  }

  async addReply(req, res, next) {
    try {
      // replyInfo = { postId, parentId, contents}
      const replyInfo = req.body;
      replyInfo.userId = req.user.userId;
      req.data = await replyService.addReply(replyInfo);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getReplies(req, res, next) {
    try {
      req.data = await replyService.getReplies();
      next();
    } catch (error) {
      next(error);
    }
  }

  async getRepliesByPost(req, res, next) {
    try {
      const { postId } = req.params;
      req.data = await replyService.getRepliesByPost(postId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getMyReplies(req, res, next) {
    try {
      const user = req.user;
      req.data = await replyService.getMyReplies(user.userId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getReply(req, res, next) {
    try {
      const { replyId } = req.params;
      req.data = await replyService.getReply(replyId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async setReply(req, res, next) {
    try {
      const user = req.user;
      const { replyId } = req.params;
      const toUpdate = req.body;
      const newToUpdate = Object.fromEntries(
        Object.entries(toUpdate).filter(([key, value]) =>
          value ? toString(value).trim() : false,
        ),
      );
      req.data = await replyService.setReply(user, replyId, newToUpdate);
      next();
    } catch (error) {
      next(error);
    }
  }

  async deleteReply(req, res, next) {
    try {
      const user = req.user;
      const { replyId } = req.params;
      req.data = await replyService.deleteReply(user, replyId);
      next();
    } catch (error) {
      next(error);
    }
  }
}

const replyController = new ReplyController(replyService);

export { replyController };

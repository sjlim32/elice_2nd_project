import { replyService } from "../services";

class ReplyController {
  constructor(ReplyService) {
    this.replyService = ReplyService;
    this.addReply = this.addReply.bind(this);
    this.getReplies = this.getReplies.bind(this);
    this.getRepliesByPost = this.getRepliesByPost.bind(this);
    this.getMyReplies = this.getMyReplies.bind(this);
    this.getReply = this.getReply.bind(this);
    this.setReply = this.setReply.bind(this);
    this.deleteReply = this.deleteReply.bind(this);
  }

  async addReply(req, res, next) {
    try {
      // replyInfo = { postId, parentId, contents}
      const replyInfo = req.body;
      replyInfo.userId = req.user.userId;
      req.data = await this.replyService.addReply(replyInfo);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getReplies(req, res, next) {
    try {
      req.data = await this.replyService.getReplies();
      next();
    } catch (error) {
      next(error);
    }
  }

  async getRepliesByPost(req, res, next) {
    try {
      const { postId } = req.params;
      req.data = await this.replyService.getRepliesByPost(postId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getMyReplies(req, res, next) {
    try {
      const user = req.user;
      req.data = await this.replyService.getMyReplies(user.userId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getReply(req, res, next) {
    try {
      const { replyId } = req.params;
      req.data = await this.replyService.getReply(replyId);
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
      req.data = await this.replyService.setReply(
        user,
        replyId,
        newToUpdate,
      );
      next();
    } catch (error) {
      next(error);
    }
  }

  async deleteReply(req, res, next) {
    try {
      const user = req.user;
      const { replyId } = req.params;
      req.data = await this.replyService.deleteReply(user, replyId);
      next();
    } catch (error) {
      next(error);
    }
  }
}

const replyController = new ReplyController(replyService);

export { replyController };

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

  // loginRequired  
  // 댓글 추가(userId받고, parentId받고..)
  async addReply(req, res, next) {
    try {
      // replyInfo = { postId, parentId, contents}
      const replyInfo = req.body;
      replyInfo.userId = req.user.userId;
      const createdNewReply = await this.replyService.addReply(replyInfo);
      res.status(200).json(createdNewReply);
    } catch (error) {
      next(error);
    }
  }

  // adminOnly
  // 전체 댓글 조회?? admin만
  async getReplies(req, res, next) {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }

  // :postId  
  // 선택한 게시글의 전체 댓글 조회 (삭제된 건 어떻게 처리?)
  // 댓글이랑 대댓글 어떻게 나눠서 넘기지?
  async getRepliesByPost(req, res, next) {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }

  // loginRequired
  // 내가 쓴 댓글 전체 조회(isDeleted=false)
  async getMyReplies(req, res, next) {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }

  // :replyId
  // 선택한 댓글 조회
  async getReply(req, res, next) {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }

  // :replyId + loginRequired
  // 선택한 댓글 수정
  async setReply(req, res, next) {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }

  // :replyId + loginRequired
  // 선택한 댓글 삭제
  async deleteReply(req, res, next) {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }
}

const replyController = new ReplyController(replyService);

export { replyController };

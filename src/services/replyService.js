import { replyModel, postModel } from "../db";

class ReplyService {
  constructor(ReplyModel, PostModel) {
    this.replyModel = ReplyModel;
    this.postModel = PostModel;
    this.addReply = this.addReply.bind(this);
    this.getReplies = this.getReplies.bind(this);
    this.getRepliesByPost = this.getRepliesByPost.bind(this);
    this.getMyReplies = this.getMyReplies.bind(this);
    this.getReply = this.getReply.bind(this);
    this.setReply = this.setReply.bind(this);
    this.deleteReply = this.deleteReply.bind(this);
  }

  async addReply(replyInfo) {
    // replyInfo : { postId, parentId, contents, userId } + { isWriter }
    // 먼저 댓글을 달려는 게시글이 존재하는지 확인
    const post = await this.postModel.findById(replyInfo.postId);
    if (!post) {
      throw new Error(`댓글을 작성하려는 게시글이 존재하지 않습니다.`);
    }

    // 그 다음 댓글 작성자가 게시글 작성자인지 확인 작업
    if (post.userId === replyInfo.userId) {
      replyInfo.isWriter = true;
    }

    // 댓글 추가
    const createdNewReply = await this.replyModel.create(replyInfo);
    return createdNewReply;
  }

  async getReplies() {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }

  async getRepliesByPost() {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }

  async getMyReplies() {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }

  async getReply() {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }

  async setReply() {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }

  async deleteReply() {
    try {
      pass;
    } catch (error) {
      next(error);
    }
  }
}

const replyService = new ReplyService(replyModel, postModel);

export { replyService };

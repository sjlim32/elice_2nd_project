import { replyModel, postModel } from "../db";

class ReplyService {
  constructor(ReplyModel, PostModel) {
    this.replyModel = ReplyModel;
    this.postModel = PostModel;
  }

  getPartial(replies) {
    const partialReplies = replies.map(reply => {
      const { _doc } = reply;
      const { isDeleted, deletedAt, userId, ...partial } = _doc;
      const { id, email, role } = userId;
      return { ...partial, userId: { _id: id, email, role } };
    });
    return partialReplies;
  }

  async addReply(replyInfo) {
    // replyInfo : { postId, parentId, contents, userId } + { isWriter }
    const post = await postModel.findById(replyInfo.postId);
    if (!post) {
      throw new Error(`댓글을 작성하려는 게시글이 존재하지 않습니다.`);
    }

    if (post.userId.id === replyInfo.userId) {
      replyInfo.isWriter = true;
    }

    const createdNewReply = await replyModel.create(replyInfo);
    return createdNewReply;
  }

  async getReplies() {
    const replies = await replyModel.findAll();
    const partialReplies = this.getPartial(replies);
    return partialReplies;
  }

  async getRepliesByPost(postId) {
    const post = await postModel.findById(postId);
    if (!post) {
      throw new Error(`존재하지 않는 게시글입니다.`);
    }

    const replies = await replyModel.findAllByPost(postId);

    let arrayReply = replies.filter(reply => !reply.parentId);
    const arrayBoolean = arrayReply.map(reply => [reply.isDeleted]);
    arrayReply = arrayReply.map(reply => {
      const { contents, isDeleted, userId, ...partial } = reply._doc;
      const { id, email, role } = userId;
      return [
        {
          ...partial,
          contents: isDeleted ? "삭제된 댓글입니다." : contents,
          userId: { _id: id, email, role },
        },
      ];
    });

    const l = arrayBoolean.length;
    arrayReply = arrayReply.map((originReply, idx) => {
      const originReplyId = originReply[0]._id;
      const nestedReply = replies
        .slice(l)
        .filter(
          reply =>
            JSON.stringify(reply.parentId) === JSON.stringify(originReplyId),
        );

      arrayBoolean[idx] = nestedReply.reduce((acc, item) => {
        acc.push(item.isDeleted);
        return acc;
      }, arrayBoolean[idx]);

      const partialNested = nestedReply.map(reply => {
        const { contents, isDeleted, userId, ...partial } = reply._doc;
        const { id, email, role } = userId;
        return {
          ...partial,
          contents: isDeleted ? "삭제된 댓글입니다." : contents,
          userId: { _id: id, email, role },
        };
      });

      return [...originReply, ...partialNested];
    });

    arrayBoolean.map((item, idx) => {
      const setBoolean = JSON.stringify(Array.from(new Set(item)));
      const isTrue = JSON.stringify(Array.from(new Set([true])));

      if (setBoolean === isTrue) {
        arrayReply.splice(idx, 1);
      }
    });

    return arrayReply;
  }

  async getMyReplies(userId) {
    const replies = await replyModel.findAllByUser(userId);
    const partialReplies = this.getPartial(replies);
    return partialReplies;
  }

  async getReply(replyId) {
    const reply = await replyModel.findById(replyId);
    if (!reply) {
      throw new Error(`존재하지 않는 댓글입니다.`);
    }
    const partialReply = this.getPartial([reply])[0];
    return partialReply;
  }

  async setReply(user, replyId, toUpdate) {
    const reply = await replyModel.findById(replyId);
    if (!reply) {
      throw new Error(`존재하지 않는 댓글입니다.`);
    }

    const { userId, role } = user;
    // 관리자 또는 댓글 작성자가 아니라면 수정 권한 없음
    if (reply.userId._id != userId && role !== "admin") {
      throw new Error(`댓글을 수정할 권한이 없습니다.`);
    }

    const { modifiedCount } = await replyModel.updateById(replyId, toUpdate);
    if (modifiedCount === 0) {
      return { result: `댓글 수정에 실패했습니다.` };
    }
    return { result: `댓글 수정을 완료하였습니다.` };
  }

  async deleteReply(user, replyId) {
    const reply = await replyModel.findById(replyId);
    if (!reply) {
      throw new Error(`존재하지 않는 댓글입니다.`);
    }

    const { userId, role } = user;
    // 관리자 또는 댓글 작성자가 아니라면 삭제 권한 없음
    if (reply.userId._id != userId && role !== "admin") {
      throw new Error(`댓글을 삭제할 권한이 없습니다.`);
    }

    const { modifiedCount } = await replyModel.softDeleteById(replyId);
    if (modifiedCount === 0) {
      throw new Error(`댓글 삭제에 실패했습니다.`);
    }
    return { result: `댓글 삭제를 완료하였습니다.` };
  }
}

const replyService = new ReplyService(replyModel, postModel);

export { replyService };

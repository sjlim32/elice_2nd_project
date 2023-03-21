import { model } from "mongoose";
import { replySchema } from "../schemas";

const Reply = model("Reply", replySchema);

class ReplyModel {
  async create(replyInfo) {
    const createdNewReply = await Reply.create(replyInfo);
    return createdNewReply;
  }

  async findAll() {
    const replies = await Reply.find({ isDeleted: false });
    return replies;
  }

  async findAllByPost(postId) {
    // 일단 삭제된 댓글도 찾아야 함
    const replies = await Reply.find({ postId }).sort({ parentId: 1 });
    return replies;
  }

  async findAllByUser(userId) {
    const replies = await Reply.find({ userId, isDeleted: false });
    return replies;
  }

  async findById(_id) {
    const reply = await Reply.findOne({ _id, isDeleted: false });
    return reply;
  }

  async updateById(_id, toUpdate) {
    const opts = { runValidators: true, omitUndefined: true };
    const updated = await Reply.updateOne(
      { _id },
      { $set: toUpdate },
      opts,
    );
    return updated;
  }

  async softDeleteById(_id) {
    const deleted = await Reply.updateOne(
      { _id },
      { $set: { isDeleted: true, deletedAt: Date.now() } },
    );
    return deleted;
  }
}

const replyModel = new ReplyModel();

export { replyModel };

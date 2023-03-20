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
    // MyPost처럼 똑같은 ObjectId 입력해야 한다는 에러 발생하넹?
    // "Cast to ObjectId failed for value \"myreplies\" (type string) at path \"_id\" for model \"Reply\""
    const replies = await Reply.find({ userId, isDeleted: false });
    return replies;
  }

  async findById(id) {
    const reply = await Reply.findOne({ _id: id, isDeleted: false });
    return reply;
  }

  async updateById(id, toUpdate) {
    const opts = { runValidators: true, omitUndefined: true };
    const updated = await Reply.updateOne(
      { _id: id },
      { $set: toUpdate },
      opts,
    );
    return updated;
  }

  async softDeleteById(id) {
    const deleted = await Reply.updateOne(
      { _id: id },
      { $set: { isDeleted: true, deletedAt: Date.now() } },
    );
    return deleted;
  }
}

const replyModel = new ReplyModel();

export { replyModel };

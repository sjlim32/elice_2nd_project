import { model } from "mongoose";
import { replySchema } from "../schemas";

const Reply = model("Reply", replySchema);

class ReplyModel {
  async create(replyInfo) {
    const createdNewReply = await Reply.create(replyInfo);
    return createdNewReply;
  }
}

const replyModel = new ReplyModel();

export { replyModel };

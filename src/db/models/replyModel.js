import { model } from "mongoose";
import { replySchema } from "../schemas";

const Reply = model("Reply", replySchema);

class ReplyModel {}

const replyModel = new ReplyModel();

export { replyModel };

import { model } from "mongoose";
import { chatSchema } from "../schemas";

const Chat = model("Chat", chatSchema);

class ChatModel {
  async create(roomId, supporterId, userId) {
    const createdChat = await Chat.create({ roomId, supporterId, userId });
    return createdChat;
  }

  async findByRoomId(roomId) {
    const foundChat = await Chat.findOne({ roomId });
    return foundChat;
  }

  async updateByRoomId(roomId, logs) {
    const updatedChat = await Chat.updateOne({ roomId }, { logs });
    return updatedChat;
  }

  async findBySupporterId(supporterId) {
    const foundChat = await Chat.find({ supporterId });
    return foundChat;
  }

  async findByUserId(userId) {
    const foundChat = await Chat.find({ userId });
    return foundChat;
  }
}

const chatModel = new ChatModel();

export { chatModel };

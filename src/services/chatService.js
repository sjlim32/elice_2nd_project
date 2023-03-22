import { chatModel } from "../db";

class ChatService {
  constructor(ChatModel) {
    this.chatModel = ChatModel;
  }

  async joinRoom(roomId, chatInfo) {
    const { userId, supporterId } = chatInfo;
    const found = await chatModel.findByRoomId(roomId);
    if (found) {
      return found;
    }
    const created = await chatModel.create(roomId, supporterId, userId);
    return created;
  }

  async addLog(roomId, chatInfo) {
    const { log } = chatInfo;
    const newLog = await chatModel.findByRoomId(roomId);
    const updated = await chatModel.updateByRoomId(roomId, [
      ...newLog.logs,
      log,
    ]);
    if (updated) {
      return { result: "complete update chat log" };
    }
    return { result: "fail update chat log" };
  }

  async findSupporterChat(supporterId) {
    const result = await chatModel.findBySupporterId(supporterId);
    return result;
  }

  async findUserChat(userId) {
    const result = await chatModel.findByUserId(userId);
    return result;
  }
}

const chatService = new ChatService(chatModel);

export { chatService };

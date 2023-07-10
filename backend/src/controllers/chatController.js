import { chatService } from "../services";

class ChatController {
  constructor(ChatService) {
    this.chatService = ChatService;
  }

  async joinRoom(req, res, next) {
    try {
      const { roomId } = req.params;
      const chatInfo = req.body;
      req.data = await chatService.joinRoom(roomId, chatInfo);
      next();
    } catch (error) {
      next(error);
    }
  }

  async addLog(req, res, next) {
    try {
      const { roomId } = req.params;
      const chatInfo = req.body;
      req.data = await chatService.addLog(roomId, chatInfo);
      next();
    } catch (error) {
      next(error);
    }
  }

  async findSupporterChat(req, res, next) {
    try {
      const { supporterId } = req.params;
      req.data = await chatService.findSupporterChat(supporterId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async findUserChat(req, res, next) {
    try {
      const { userId } = req.params;
      req.data = await chatService.findUserChat(userId);
      next();
    } catch (error) {
      next(error);
    }
  }
}

const chatController = new ChatController(chatService);

export { chatController };

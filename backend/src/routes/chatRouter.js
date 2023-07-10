import express from "express";
import { chatController } from "../controllers";

const chatRouter = express.Router();
chatRouter.post("/chats/join/:roomId", chatController.joinRoom); // find by roomId, return all chatInfo(room_id,s_id,u_id,logs)
chatRouter.post("/chats/logs/:roomId", chatController.addLog); // find by roomId, update logs return all chatInfo
chatRouter.get(
  "/chats/supporters/:supporterId",
  chatController.findSupporterChat,
); // get chat data for each supporter id
chatRouter.get("/chats/users/:userId", chatController.findUserChat); // get chatLogs for each user id

export { chatRouter };

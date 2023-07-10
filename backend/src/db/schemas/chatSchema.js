import { Schema } from "mongoose";

const chatSchema = new Schema({
  roomId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  supporterId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  logs: {
    type: Array,
    default: ["여기가 시작점입니다."],
  },
});

export { chatSchema };

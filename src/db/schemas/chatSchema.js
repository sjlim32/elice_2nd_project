import { Schema } from "mongoose";

const chatSchema = new Schema({
  room_id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  supporter_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  logs: {
    type: Array,
    default: ["여기가 시작점입니다."],
  },
});

export { chatSchema };

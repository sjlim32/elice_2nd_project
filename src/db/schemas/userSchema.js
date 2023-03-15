// userSchema.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "pending", "support"],
    default: "user",
  },
});

const supportUserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  history: {
    type: String,
    required: true,
  },
  certification: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
const SupportUser = User.discriminator("SupportUser", supportUserSchema);

export { User, SupportUser };

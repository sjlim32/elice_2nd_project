import { model } from "mongoose";
import { User } from "./userModel";
import { supportUserSchema } from "../schemas";

const SupportUser = User.discriminator("SupportUser", supportUserSchema);

class SupportUserModel {
  async create(userInfo) {
    const createdNewUser = await SupportUser.create(userInfo);
    return createdNewUser;
  }

  // Read
  async findById(userId) {
    const user = await SupportUser.findById(userId);
    return user;
  }

  async findByEmail(email) {
    const user = await SupportUser.findOne({ email });
    return user;
  }

  async findAll() {
    const users = await SupportUser.find({});
    return users;
  }

  // Update
  async updateById(userId, update) {
    const updatedUser = await SupportUser.findByIdAndUpdate(userId, update, {
      new: true,
    });
    return updatedUser;
  }

  // Delete
  async deleteById(userId) {
    const deletedUser = await SupportUser.findByIdAndDelete(userId);
    return deletedUser;
  }
}

const supportUserModel = new SupportUserModel();

export { SupportUser, supportUserModel };

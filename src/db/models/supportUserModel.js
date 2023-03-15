import { model } from "mongoose";
import { User } from "./userModel";
import { supportUserSchema } from "../schemas";

const SupportUser = User.discriminator("supportUser", supportUserSchema);

class SupportUserModel {
  async create(userInfo) {
    const createdNewUser = await SupportUser.create(userInfo);
    return createdNewUser;
  }

  // Read
  async readById(userId) {
    const user = await SupportUser.findById(userId);
    return user;
  }

  async readByEmail(email) {
    const user = await SupportUser.findOne({ email });
    return user;
  }

  async readAll() {
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
    const deletedUser = await SupportUser.findByIdAndDelte(userId);
    return deletedUser;
  }
}

const supportUserModel = new SupportUserModel();

export { SupportUser, supportUserModel };

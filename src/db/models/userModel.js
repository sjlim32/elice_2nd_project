import { model } from "mongoose";
import { userSchema } from "../schemas";

const User = model("users", userSchema);

class UserModel {
  // Create
  async create(userInfo) {
    const createdNewUser = await User.create(userInfo);
    return createdNewUser;
  }

  // Read
  async readById(userId) {
    const user = await User.findById(userId);
    return user;
  }

  async readByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async readAll() {
    const users = await User.find({});
    return users;
  }

  // Update
  async updateById(userId, update) {
    const updatedUser = await User.findByIdAndUpdate(userId, update, {
      new: true,
    });
    return updatedUser;
  }

  // Delete
  async deleteById(userId) {
    const deletedUser = await User.findByIdAndDelte(userId);
    return deletedUser;
  }
}

const userModel = new UserModel();

export { userModel };

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
  async findById(userId) {
    const user = await User.findById(userId);
    return user;
  }

  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async findAll() {
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
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  }
}

const userModel = new UserModel();

export { User, userModel };

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../db/models";

class UserService {
  constructor(UserModel) {
    this.userModel = UserModel;
  }

  async addUser(userInfo) {
    console.log(userInfo);
    const createdNewUser = await this.userModel.create(userInfo);
    return createdNewUser;
  }

  async getUser(userId) {}
}

const userService = new UserService(userModel);

export { userService };

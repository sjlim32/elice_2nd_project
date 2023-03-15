import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../db/models";

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }
}

const userService = UserService();

export { userService };

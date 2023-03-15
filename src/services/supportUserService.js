import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { supportUserModel } from "../db/models";

class SupportUserService {
  constructor(SupportUserModel) {
    this.supportUserModel = SupportUserModel;
  }

  async addUser(userInfo) {
    console.log(userInfo);
    const createdNewUser = await this.supportUserModel.create(userInfo);
    return createdNewUser;
  }
}

const supportUserService = new SupportUserService(supportUserModel);

export { supportUserService };

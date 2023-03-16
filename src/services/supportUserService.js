import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { supportUserModel } from "../db/models";

class SupportUserService {
  constructor(SupportUserModel) {
    this.supportUserModel = SupportUserModel;
    this.editUser = this.editUser.bind(this);
  }

  async addUser(userInfo) {
    const { email, password } = userInfo;

    const found = await this.supportUserModel.findByEmail(email);

    if (found) {
      throw new Error(`이미 가입된 이메일 입니다.`);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserInfo = { ...userInfo, password: hashedPassword };

    const createdNewUser = await this.supportUserModel.create(newUserInfo);
    return createdNewUser;
  }

  async getUser(userId) {
    const user = await this.supportUserModel.findById(userId);

    if (!user) {
      throw new Error(
        `존재하지 않는 userId입니다. DB에 해당 _id가 존재하지 않음.`,
      );
    }

    return user;
  }

  async editUser(userInfo, toUpdate) {
    const { userId, currentPassword } = userInfo;
    let user = await this.supportUserModel.findById(userId);

    if (!user) {
      throw new Error(
        `존재하지 않는 userId입니다. DB에 해당 _id가 존재하지 않음.`,
      );
    }

    let newToUpdate = { ...toUpdate };

    if (currentPassword) {
      const correctPasswordHash = user.password;
      const isPasswordCorrect = await bcrypt.compare(
        currentPassword,
        correctPasswordHash,
      );

      if (!isPasswordCorrect) {
        throw new Error("비밀번호가 일치하지 않습니다.");
      }

      // 비밀번호 변경 시 변경 비밀번호 hash 처리
      const { password } = toUpdate;

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        newToUpdate = { ...toUpdate, password: hashedPassword };
      }
    }

    user = await this.supportUserModel.updateById(userId, newToUpdate);

    return user;
  }

  async deleteUser(userId) {
    const user = await this.supportUserModel.deleteById(userId);

    if (!user) {
      throw new Error(`가입된 정보가 없습니다.`);
    }
    return user;
  }
}

const supportUserService = new SupportUserService(supportUserModel);

export { supportUserService };

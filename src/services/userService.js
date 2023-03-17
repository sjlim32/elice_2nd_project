import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel, refreshTokenModel } from "../db/models";

class UserService {
  constructor(userModel, refreshTokenModel) {
    this.userModel = userModel;
    this.refreshTokenModel = refreshTokenModel;
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  async addUser(userInfo) {
    const { email, password } = userInfo;

    const found = await this.userModel.findByEmail(email);

    if (found) {
      throw new Error(`이미 가입된 이메일 입니다.`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserInfo = { ...userInfo, password: hashedPassword };

    const createdNewUser = await this.userModel.create(newUserInfo);
    return createdNewUser;
  }

  async getUserById(userId) {
    const user = await this.userModel.findById(userId);

    if (!user) {
      throw new Error(
        `존재하지 않는 userId입니다. DB에 해당 _id가 존재하지 않음.`,
      );
    }

    return user;
  }

  async getUserByRole(role) {
    const users = await this.userModel.findByRole(role);
    return users;
  }

  async getUserByRefreshToken(token) {
    const user = await this.refreshTokenModel.findByToken(token);
    return user;
  }
  async editUser(userInfo, toUpdate) {
    const { userId, currentPassword } = userInfo;

    let user = await this.userModel.findById(userId);

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

      const { password, ...rest } = toUpdate;

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        newToUpdate = { ...rest, password: hashedPassword };
      }
    }

    user = await this.userModel.updateById(userId, newToUpdate);
    return user;
  }

  async generateToken(loginInfo) {
    const { email, password } = loginInfo;
    const user = await this.userModel.findByEmail(email);

    if (!user) {
      throw new Error(`Email을 찾을 수 없습니다.`);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("패스워드가 일치하지 않습니다.");
    }

    const accessToken = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" },
    );

    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" },
    );

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await this.refreshTokenModel.create({
      userId: user._id,
      token: refreshToken,
      expires,
    });

    return { accessToken, refreshToken };
  }

  async deleteToken(userId) {
    await this.refreshTokenModel.deleteByUserId(userId);
  }

  async deleteUser(userId) {
    const user = await this.userModel.deleteById(userId);

    if (!user) {
      throw new Error(`가입된 정보가 없습니다.`);
    }
    await this.refreshTokenModel.deleteByUserId(userId);
    return user;
  }
}

const userService = new UserService(userModel, refreshTokenModel);
export { userService, UserService };

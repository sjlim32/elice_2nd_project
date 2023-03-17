import { model } from "mongoose";
import { User, UserModel } from "./userModel";
import { supportUserSchema } from "../schemas";

const SupportUser = User.discriminator("SupportUser", supportUserSchema);

//Support 회원가입을 제외한 나머지 Method는 재활용이 가능하기 때문에 UserModel Class를 상속
class SupportUserModel extends UserModel {
  async create(userInfo) {
    const createdNewUser = await SupportUser.create(userInfo);
    return createdNewUser;
  }
}

const supportUserModel = new SupportUserModel();

export { SupportUser, supportUserModel };

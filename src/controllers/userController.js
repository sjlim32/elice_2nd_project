import { userService, supportUserService } from "../services";

class UserController {
  async register(req, res, next) {
    try {
      const userInfo = req.body;

      if (!userInfo.role) {
        throw new Error(`role 속성이 존재하지 않습니다.`);
      }

      let newUser;

      if (userInfo.role === "user") {
        newUser = await userService.addUser(userInfo);
      } else if (userInfo.role === "pending") {
        newUser = await supportUserService.addUser(userInfo);
      } else {
        throw new Error(`잘못된 role 속성입니다.`);
      }

      res.status(200).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  async getUser(req, res, next) {
    try {
      const { userId, role } = req.user;
      const param = req.params;

      let user = null;

      if (Object.keys(param).length === 0 && param.constructor === Object) {
        user = await userService.getUserById(userId);
      } else {
        user =
          Object.keys(param)[0] === "userId"
            ? await userService.getUserById(Object.values(param)[0])
            : await userService.getUserByRole(Object.values(param)[0]);
      }

      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }

  async editUser(req, res, next) {
    const userId = req.params.userId || req.user.userId;

    const { currentPassword, ...updateFields } = req.body;

    const userInfo = { userId, currentPassword };
    const toUpdate = Object.fromEntries(
      Object.entries(updateFields).filter(([_, value]) => value),
    );

    let updatedUser = null;

    try {
      if (req.user.role === "user") {
        updatedUser = await userService.editUser(userInfo, toUpdate);
      } else {
        updatedUser = await supportUserService.editUser(userInfo, toUpdate);
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const userId = req.params.userId || req.user.userId;

      const deletedUser = await userService.deleteUser(userId);
      res.status(200).send(deletedUser);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const { accessToken, refreshToken } = await userService.generateToken({
        email,
        password,
      });

      const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      };

      res.cookie("refreshToken", refreshToken, cookieOptions);

      res.status(200).send({ accessToken });
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { userId } = req.user;
      res.clearCookie("refreshToken");
      await userService.deleteToken(userId);
      res.status(200).send(`정상적으로 로그아웃되었습니다.`);
    } catch (error) {
      next(error);
    }
  }
}

const userController = new UserController();

export { userController };

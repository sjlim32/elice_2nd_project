import { userService } from "../services";

class UserController {
  async register(req, res, next) {
    const userInfo = req.body;

    try {
      req.data = await userService.addUser(userInfo);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    const userId = req.params.userId || req.user.userId;

    try {
      req.data = await userService.getUserById(userId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getUsersByRole(req, res, next) {
    const role = req.params.userRole;

    try {
      req.data = await userService.getUsersByRole(role);
      next();
    } catch (error) {
      next(error);
    }
  }

  async adminEditUserRole(req, res, next) {
    const { userId } = req.params;
    const { role } = req.body;

    try {
      req.data = await userService.editUserRole(userId, role);
      next();
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
    try {
      req.data = await userService.editUser(userInfo, toUpdate);
      next();
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    const userId = req.params.userId || req.user.userId;

    try {
      req.data = await userService.deleteUser(userId);
      next();
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    try {
      const { accessToken, role } = await userService.login({
        email,
        password,
      });

      // const cookieOptions = {
      //   httpOnly: true,
      //   // secure: true,
      //   sameSite: "strict",
      // };

      // res.cookie("refreshToken", refreshToken, cookieOptions);
      req.data = { accessToken, role, email };
      next();
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    const { userId } = req.user;

    try {
      await userService.deleteRefreshToken(userId);

      res.clearCookie("refreshToken");
      req.data = { result: `정상적으로 로그아웃되었습니다.` };
      next();
    } catch (error) {
      next(error);
    }
  }
}

const userController = new UserController();

export { userController };

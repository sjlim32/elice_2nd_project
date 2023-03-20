import { userService } from "../services";

class UserController {
  async register(req, res, next) {
    const userInfo = req.body;

    try {
      const newUser = await userService.addUser(userInfo);
      res.status(200).json(newUser);
    } catch (error) {
      next(error.message);
    }
  }

  async getUserById(req, res, next) {
    const userId = req.params.userId || req.user.userId;

    try {
      const user = await userService.getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      next(error.message);
    }
  }

  async getUsersByRole(req, res, next) {
    const role = req.params.userRole;

    try {
      const users = await userService.getUsersByRole(role);
      res.status(200).json(users);
    } catch (error) {
      next(error.message);
    }
  }

  async adminEditUserRole(req, res, next) {
    const userId = req.params.userId;
    const { role } = req.body;

    try {
      const updatedUser = await userService.editUserRole(userId, role);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error.message);
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
      const updatedUser = await userService.editUser(userInfo, toUpdate);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    const userId = req.params.userId || req.user.userId;

    try {
      const deletedUser = await userService.deleteUser(userId);
      res.status(200).send(deletedUser);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    try {    
      const { accessToken, refreshToken } = await userService.login({
        email,
        password,
      });

      const cookieOptions = {
        httpOnly: true,
        // secure: true,
        sameSite: "strict",
      };

      res.cookie("refreshToken", refreshToken, cookieOptions);
      res.status(200).json({ accessToken });
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    const { userId } = req.user;

    try {
      await userService.deleteRefreshToken(userId);

      res.clearCookie("refreshToken");
      res.status(200).send(`정상적으로 로그아웃되었습니다.`);
    } catch (error) {
      next(error);
    }
  }
}

const userController = new UserController();

export { userController };

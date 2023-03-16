import { userService } from "../services";
import { supportUserService } from "../services/supportUserService";

class UserController {
  async register(req, res, next) {
    try {
      const {
        formType,
        email,
        password,
        userName,
        phoneNumber,
        address,
        history,
        certification,
      } = req.body;

      const userInfo = {
        email,
        password,
        ...(userName && { userName }),
        ...(phoneNumber && { phoneNumber }),
        ...(address && { address }),
        ...(history && { history }),
        ...(certification && { certification }),
      };

      if (formType === "user") {
        const newUser = await userService.addUser(userInfo);
        res.status(200).json(newUser);
      } else if (formType === "support") {
        const newUser = await supportUserService.addUser(userInfo);
        res.status(200).json(newUser);
      } else {
        res.status(400).send(`formType 속성을 지정해주세요.`);
      }
    } catch (error) {
      next(error);
    }
  }

  async getUser(req, res, next) {
    const { userId } = req.user;

    const user = await userService.getUser(userId);

    res.status(200).send(user);
  }

  async editUser(req, res, next) {
    const { userId } = req.user;
    const { formType } = req.body;
    const { currentPassword } = req.body;
    const userInfo = { userId, currentPassword };
    const { password, userName, phoneNumber, address } = req.body;

    try {
      const toUpdate = {
        ...(password && { password }),
        ...(userName && { userName }),
        ...(phoneNumber && { phoneNumber }),
        ...(address && { address }),
      };

      if (formType === "user") {
        const updatedUser = await userService.editUser(userInfo, toUpdate);
        res.status(200).json(updatedUser);
      } else if (formType === "support") {
        const updatedUser = await supportUserService.editUser(
          userInfo,
          toUpdate,
        );
        res.status(200).json(updatedUser);
      } else {
        res.status(400).send(`formType 속성을 지정해주세요.`);
      }
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    const { userId } = req.user;

    const user = await userService.deleteUser(userId);

    res.status(200).send(user);
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const loginInfo = { email, password };

    try {
      const token = await userService.generateToken(loginInfo);
      res.status(200).send(token);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    /* */
  }
}

const userController = new UserController();

export { userController };

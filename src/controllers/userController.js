import { userService } from "../services";
import { supportUserService } from "../services/supportUserService";

class UserController {
  async register(req, res, next) {
    try {
      if (req.formType === "user") {
        const { email, password } = req.body;
        const newUser = await userService.addUser({ email, password });
        res.status(200).json(newUser);
      } else {
        const {
          email,
          password,
          userName,
          phoneNumber,
          address,
          history,
          certification,
        } = req.body;

        const newUser = await supportUserService.addUser({
          email,
          password,
          userName,
          phoneNumber,
          address,
          history,
          certification,
        });
        res.status(200).json(newUser);
      }
    } catch (error) {
      next(error);
    }
  }

  async getUser(req, res, next) {
    /**/
  }

  async editUser(req, res, next) {
    /**/
  }

  async deleteUser(req, res, next) {
    /* */
  }

  async login(req, res, next) {
    /* */
  }

  async logout(req, res, next) {
    /* */
  }
}

const userController = new UserController();

export { userController };

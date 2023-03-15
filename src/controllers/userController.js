class UserController {
  async register(req, res, next) {
    const { email, password } = req.body;
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

const userController = UserController();

export { userController };

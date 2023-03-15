import { Router } from "express";
import { loginRequired } from "../middlewares";
import { userController } from "../controllers";

const userRouter = Router();

// 회원가입
userRouter.post("/users", userController.register);

// 회원 정보 조회
userRouter.get("/users", loginRequired, userController.getUser);

// 회원 수정
userRouter.patch("/users", loginRequired, userController.editUser);

// 회원 탈퇴
userRouter.delete("/users", loginRequired, userController.deleteUser);

// 로그인
userRouter.post("/login", userController.login);

// 로그아웃
userRouter.delete("/logout", loginRequired, userController.logout);

export { userRouter };

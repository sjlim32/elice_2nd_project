import { Router } from "express";
import { loginRequired, adminOnly, checkAppjson } from "../middlewares";
import { userController } from "../controllers";

const userRouter = Router();

// 회원가입
userRouter.post("/users", checkAppjson, userController.register);

// 회원 정보 조회
userRouter.get("/users", loginRequired, userController.getUserById);

// 회원 수정
userRouter.patch(
  "/users",
  checkAppjson,
  loginRequired,
  userController.editUser,
);

// 회원 탈퇴
userRouter.delete("/users", loginRequired, userController.deleteUser);

// 로그인
userRouter.post("/login", checkAppjson, userController.login);

// 로그아웃
userRouter.delete("/logout", loginRequired, userController.logout);

/* 관리자 */
// 유저 역할별 조회
userRouter.get(
  "/admin/users/userRole/:userRole",
  loginRequired,
  adminOnly,
  userController.getUsersByRole,
);

// 유저 ID로 조회
userRouter.get(
  "/admin/users/:userId",
  loginRequired,
  adminOnly,
  userController.getUserById,
);

// 유저 역할 수정
userRouter.patch(
  "/admin/users/:userId",
  checkAppjson,
  loginRequired,
  adminOnly,
  userController.adminEditUserRole,
);

// 유저 삭제
userRouter.delete(
  "/admin/users/:userId",
  loginRequired,
  adminOnly,
  userController.deleteUser,
);

export { userRouter };

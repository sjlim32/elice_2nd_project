const adminOnly = (req, res, next) => {
  const userRole = req.user.role;

  if (userRole === "admin") {
    next();
  } else {
    console.log(req.user);
    throw new Error("관리자 권한이 없습니다.");
  }
};

export { adminOnly };

import { jwt } from "jsonwebtoken";

const loginRequired = (req, res, next) => {
  // Request 헤더로부터 Authorization 검증
  const token = req.headers.authorization.split(" ")[1];

  // 토큰 존재여부
  if (!token || token === "null") {
    res.sendStatus(401);
  }

  // 토큰 검증
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.sendStatus(401);
      return;
    }
    req.user = user;
    next();
  });
};

export { loginRequired };

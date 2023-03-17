import jwt from "jsonwebtoken";

const loginRequired = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token || token === "null") {
    res.status(401).send(`토큰이 없음`);
    return;
  }

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

const checkAppjson = (req, res, next) => {
  try {
    const contentType = req.headers["content-type"];
    if (contentType.startsWith("application/json")) {
      next();
    }
  } catch (err) {
    throw new Error("content-type을 json형태로 바꿔주세요.");
  }
};

export { checkAppjson };

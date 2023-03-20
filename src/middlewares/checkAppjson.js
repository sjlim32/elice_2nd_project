const checkAppJson = (req, res, next) => {
  const contentType = req.headers["content-type"];
  if (!contentType || !contentType.startsWith("application/json")) {
    throw Object.assign(new Error('content-type을 json으로 설정해주세요'), {status: 404})
  }
  next();
};

export { checkAppJson };

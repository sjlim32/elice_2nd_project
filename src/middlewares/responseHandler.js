const responseHandler = (req, res, next) => {
  try {
    res.status(200).json(req.data);
  } catch (error) {
    next(error);
  }
};

export { responseHandler };

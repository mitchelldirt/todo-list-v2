export const appendSays = (req, res, next) => {
  req.body.message = `SAYS: ${req.body.message}`;
  next();
};

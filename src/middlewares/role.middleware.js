const AppError = require("../utils/apperror");
const { StatusCode } = require("../utils/status");

const adminOnly = (req, res, next) => {
  if (req.user.role === "admin") return next();
  else
    throw new AppError("You do not have the authority", StatusCode.FORBIDDEN);
};


module.exports = { adminOnly };

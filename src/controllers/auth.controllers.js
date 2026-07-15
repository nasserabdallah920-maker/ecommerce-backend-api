const { StatusCode, Status } = require("../utils/status");
const { authServices } = require("../services/index.services");
const createUser = async (req, res, next) => {
  const body = req.body;
  const result = await authServices.addUser(body);
  res
    .cookie("refreshToken", result.refreshToken, { httpOnly: true })
    .status(StatusCode.CREATED)
    .json({
      success: Status.SUCCESS,
      user: result.user,
      accessToken: result.accessToken,
    });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const result = await authServices.userLogin(email, password);
  res
    .cookie("refreshToken", result.refreshToken, { httpOnly: true })
    .status(StatusCode.OK)
    .json({ success: Status.SUCCESS, accessToken: result.accessToken });
};

const logOut = async (req, res, next) => {
  const id = req.user.id;

  await authServices.userLogOut(id);
  res.clearCookie("refreshToken");
  res
    .status(StatusCode.OK)
    .json({ success: Status.SUCCESS, message: "Logged out successfully" });
};

const refresh = async (req, res, next) => {
  const token = req.cookies.refreshToken;
  const newToken = await authServices.newAccessToken(token);
  res.status(StatusCode.OK).json({
    success: Status.SUCCESS,
    data: { accessToken: newToken.accessToken },
  });
};

module.exports = { createUser, login, refresh, logOut };

const {userServices}=require('../services/index.services')
const { StatusCode, Status } = require("../utils/status");

const getUser = async (req, res, next) => {
  const userId = req.user.id;
  const result = await userServices.getUserById(userId);
  res.status(StatusCode.OK).json({ success: Status.SUCCESS, data: result });
};


const deleteUser = async (req, res, next) => {
  const id = req.user.id;
  await userServices.removeUserById(id);
  res.status(StatusCode.NO_CONTENT).send()
};
const changeUserInformation = async (req, res, next) => {
  const userId = req.user.id;
  const body = req.body;
  const change = await userServices.changeUserInformation(userId,body);

  res
    .status(StatusCode.OK)
    .json({ success: Status.SUCCESS, data: { user: change } });
};
const changeUserPassword = async (req, res, next) => {
  const userId=req.user.id
  const body = req.body;
  const change = await userServices.changeUserPassword(userId, body);

  res
    .status(StatusCode.OK)
    .json({ success: Status.SUCCESS, data: { user: change } });
};
module.exports = { getUser, deleteUser, changeUserPassword,changeUserInformation };

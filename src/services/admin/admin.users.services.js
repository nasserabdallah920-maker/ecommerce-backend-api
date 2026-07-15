const repo = require("../../repositories/user.repositories");
const AppError = require("../../utils/apperror");
const { StatusCode } = require("../../utils/status");

const getUserById = async (params) => {
  const id = params.id;
  const user = await repo.findUserById(id);
  if (!user) {
    throw new AppError("This user does not exist", StatusCode.NOT_FOUND);
  }
  return user;
};
const getAll = async (query) => {
  const sort = query.sort;
  const page = query.page || 1;
  const limit = query.limit || 20;
  const users = await repo.findAllUsers(page, limit, sort);
  if (!users) {
    throw new AppError("No users", StatusCode.NOT_FOUND);
  }
  return users;
};

const userSearch = async (query) => {
  const { firstName, lastName, email } = query;

  const users = await repo.findUserBySearch({ firstName, lastName, email });
  if (!users || users.length === 0) {
    throw new AppError(
      "No users found matching the search criteria",
      StatusCode.NOT_FOUND,
    );
  }
  return users;
};

const removeUser = async (params) => {
  const id = params.id;
  const user = await repo.findUserById(id);
  if (!user) {
    throw new AppError("This user does not exist", StatusCode.NOT_FOUND);
  }
  if (user.role == "admin") {
    throw new AppError("You cannot delete another admin", StatusCode.FORBIDDEN);
  }
  await repo.deleteUserById(id);
  return;
};

module.exports = { getUserById, removeUser, getAll, userSearch };

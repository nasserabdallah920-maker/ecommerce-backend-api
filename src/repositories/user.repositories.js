const User = require("../models/user.model");


const saveUser=async(newUser)=>{
const user = new User(newUser)
await user.save()
return user
}
const findUserById = async (userID) => {
  const user = await User.findById(userID)
  return user;
};
const findRefreshTokenByUserId = async (userID) => {
  const user = await User.findById(userID).select('+refreshToken')
  return user.refreshToken
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({ email }).select("password email role");
  return user;
};

const findAllUsers = async (page, limit, sort) => {
  const skip = (page - 1) * limit;
  if (page && limit && sort) {
    const sortBy = {};
    if (sort.startsWith("-")) {
      sortBy[sort.slice(1)] = -1;
      const users = await User.find({}).sort(sortBy).skip(skip).limit(limit);
      return users;
    } else {
      sortBy[sort] = 1;
      const users = await User.find({}).sort(sortBy).skip(skip).limit(limit);
      return users;
    }
  }
  const users = await User.find({}).skip(skip).limit(limit);
  return users;
};

const findUserBySearch = async (search) => {
  const query = {};
  if (search.firstName) {
    query.firstName = { $regex: search.firstName, $options: "i" };
  }
  if (search.lastName) {
    query.lastName = { $regex: search.lastName, $options: "i" };
  }
  if (search.email) {
    query.email = { $regex: search.email, $options: "i" };
  }
  const users = await User.find(query).select("-password -refreshToken -__v");
  return users;
};

const deleteUserById = async (userID) => {
  await User.deleteOne({ _id: userID });
  return;
};

const updateUserById = async (userID, newData) => {
  const user = await User.findByIdAndUpdate(userID, newData, {
    returnDocument: "after",
    runValidators: true,
  });
  return user;
};

module.exports = {
  saveUser,
  findUserById,
  findUserByEmail,
  findAllUsers,
  findUserBySearch,
  deleteUserById,
  updateUserById,findRefreshTokenByUserId
};

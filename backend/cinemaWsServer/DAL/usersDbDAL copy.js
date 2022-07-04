const UsersModel = require("../models/usersModel");

const getAllUsers = () => {
  return UsersModel.find({});
};

const getUser = (id) => {
  return UsersModel.findById(id);
};

const addUser = (user) => {
  return user.save();
};

const updateUser = (id, user) => {
  return UsersModel.findByIdAndUpdate(id, user);
};

const deleteUser = (id) => {
  return UsersModel.findByIdAndDelete(id);
};

module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser };

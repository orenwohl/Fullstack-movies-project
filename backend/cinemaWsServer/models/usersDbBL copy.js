const usersDAL = require("../DAL/usersDbDAL copy");
const UsersModel = require("./usersModel");

const getAllUsers = async function () {
  return await usersDAL.getAllUsers();
};

const getUser = (id) => {
  return usersDAL.getUser(id);
};

const createUser = function (user) {
  let userToAdd = UsersModel({
    Username: user.Username,
    Password: user.Password,
  });
  return usersDAL.addUser(userToAdd);
};

const updateUser = (id, obj) => {
  let user = {
    Username: obj.Username,
    Password: obj.Password,
  };
  return usersDAL.updateUser(id, user);
};

const deleteUser = (id) => {
  return usersDAL.deleteUser(id);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

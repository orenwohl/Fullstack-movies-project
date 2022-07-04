const usersDAL = require("../DAL/userDAL");
const getUsers = async () => {
  let data = await usersDAL.readFile();
  return data.users;
};
const getUser = async (id) => {
  let data = await usersDAL.readFile();
  console.log(data.users);
  return data.users.find((user) => user.id == id);
};

const addUser = async (newUser) => {
  let data = await usersDAL.readFile();
  let users = data.users;

  users.push(newUser);
  let obj = { users: users };
  let status = await usersDAL.writeToFile(obj);
  return status;
};

const updateUser = async (id, user) => {
  let data = await usersDAL.readFile();
  let users = data.users;

  let index = users.findIndex((x) => x.id == id);
  if (index >= 0) {
    users[index] = user;
  }
  let obj = { users: users };
  let status = await usersDAL.writeToFile(obj);
  return status;
};

const deleteUser = async (id) => {
  let data = await usersDAL.readFile();
  let users = data.users;

  let index = users.findIndex((user) => user.id == id);
  if (index >= 0) {
    users.splice(index, 1);
  }
  let obj = { users: users };
  let status = await usersDAL.writeToFile(obj);
  return status;
};

module.exports = { addUser, deleteUser, updateUser, getUsers, getUser };

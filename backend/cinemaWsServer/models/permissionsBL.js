const permissionDAL = require("../DAL/permissionsDAL");
const getPermissions = async () => {
  let data = await permissionDAL.readFile();
  return data.permissions;
};
const getPemissionByUserId = async (id) => {
  let data = await permissionDAL.readFile();
  console.log(data.permissions);
  return data.permissions.find((permission) => permission.id == id);
};

const addPermission = async (newPermission) => {
  let data = await permissionDAL.readFile();
  let permissions = data.permissions;

  permissions.push(newPermission);
  let obj = { permissions: permissions };
  let status = await permissionDAL.writeToFile(obj);
  return status;
};

const updatePemissionByUserId = async (id, permission) => {
  let data = await permissionDAL.readFile();
  let permissions = data.permissions;

  let index = permissions.findIndex((x) => x.id == id);
  if (index >= 0) {
    permissions[index] = permission;
  }
  let obj = { permissions: permissions };
  let status = await permissionDAL.writeToFile(obj);
  return status;
};

const deletePermissions = async (id) => {
  let data = await permissionDAL.readFile();
  let permissions = data.permissions;

  let index = permissions.findIndex((permission) => permission.id == id);
  if (index >= 0) {
    permissions.splice(index, 1);
  }
  let obj = { permissions: permissions };
  let status = await permissionDAL.writeToFile(obj);
  return status;
};

module.exports = {
  addPermission,
  deletePermissions,
  updatePemissionByUserId,
  getPermissions,
  getPemissionByUserId,
};

const axios = require("axios");
const membersModel = require("../models/MembersModel copy");

const getAllMembers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

const getMember = (id) => {
  return membersModel.findById(id);
};

const addMember = (member) => {
  return membersModel(member.save());
};

const updateMember = (id, member) => {
  return membersModel.findByIdAndUpdate(id, member);
};

const deleteMember = (id) => {
  return membersModel.findByIdAndDelete(id);
};

module.exports = {
  getAllMembers,
  getMember,
  addMember,
  updateMember,
  deleteMember,
};

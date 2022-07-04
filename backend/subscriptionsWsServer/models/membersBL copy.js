const membersModel = require("./MembersModel copy");
const membersDAL = require("../DAL/membersDAL copy");
const mongoose = require("mongoose");

const getAllMembers = async function () {
  if ((await membersModel.collection.countDocuments()) > 1) {
    return new Promise((resolve, reject) => {
      membersModel.find({}, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  } else {
    console.log("created");
    const members = await membersDAL.getAllMembers();
    members.data.forEach((member) => {
      let memberToInsert = membersModel({
        Name: member.name,
        Email: member.email,
        City: member.address.city,
      });
      memberToInsert.save();
    });
  }
};

const getMember = (id) => {
  return membersDAL.getMember(id);
};

const createMember = function (member) {
  let memberToAdd = membersModel({
    Name: member.Name,
    Email: member.Email,
    City: member.City,
  });
  return membersDAL.addMember(memberToAdd);
};

const updateMember = (id, obj) => {
  let member = {
    Name: obj.Name,
    Email: obj.Email,
    City: obj.City,
  };
  return membersDAL.updateMember(id, member);
};

const deleteMember = (id) => {
  return membersDAL.deleteMember(id);
};

module.exports = {
  getAllMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember,
};

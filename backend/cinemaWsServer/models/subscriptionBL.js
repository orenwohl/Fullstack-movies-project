const SubscriptionDAL = require("../DAL/subscriptionDAL");
const SubscriptionModel = require("./subscriptionModel copy");

const getAllSubscriptions = async function () {
  return await SubscriptionDAL.getAllSubscriptions();
};

const getSubcsriptionById = (id) => {
  return SubscriptionDAL.getSubcsriptionById(id);
};

const getSubcsriptionByMoviceId = (id) => {
  return SubscriptionDAL.getSubcsriptionByMoviceId(id);
};

const createSubscription = async function (sub) {
  let subToAdd = SubscriptionModel({
    MemberId: sub.MemberId,
    Movies: sub.Movies,
  });
  return SubscriptionDAL.addSubscription(subToAdd);
};

const updatSubscription = (id, obj) => {
  let sub = {
    Username: obj.Username,
    Movies: obj.Movies,
  };
  return SubscriptionDAL.updateUser(id, sub);
};

const deleteSubscription = (id) => {
  return SubscriptionDAL.deletSubscscription(id);
};

///delete subscription by movieId
const deleteSubscriptionByMovieId = (id) => {
  return SubscriptionDAL.deletSubscriptionByMovieId(id);
};

module.exports = {
  getAllSubscriptions,
  getSubcsriptionById,
  createSubscription,
  updatSubscription,
  deleteSubscription,
  deleteSubscriptionByMovieId,
  getSubcsriptionByMoviceId,
};

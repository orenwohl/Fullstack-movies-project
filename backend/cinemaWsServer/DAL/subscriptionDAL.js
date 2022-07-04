const SubscriptionModel = require("../models/subscriptionModel copy");

const getAllSubscriptions = () => {
  return SubscriptionModel.find({});
};

const getSubcsriptionById = (id) => {
  return SubscriptionModel.find({ MemberId: id });
};

const getSubcsriptionByMoviceId = (id) => {
  return SubscriptionModel.find(
    { movies: { $elemMatch: { id } } },
    { movies: { MovieId: id } }
  );
};

const addSubscription = (user) => {
  return user.save();
};

const updateUser = (id, user) => {
  return SubscriptionModel.findOneAndUpdate({ MemberId: id }, user);
};

const deletSubscscription = (id) => {
  return SubscriptionModel.findOneAndDelete({ MemberId: id });
};

const deletSubscriptionByMovieId = async (id) => {
  return await SubscriptionModel.updateMany(
    { movies: { $elemMatch: { id } } },
    { $pull: { Movies: { MovieId: id } } }
  );
};
module.exports = {
  getAllSubscriptions,
  getSubcsriptionById,
  addSubscription,
  updateUser,
  deletSubscscription,
  deletSubscriptionByMovieId,
  getSubcsriptionByMoviceId,
};

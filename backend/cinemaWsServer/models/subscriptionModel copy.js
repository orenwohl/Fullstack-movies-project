const mongoose = require("mongoose");

let SubscriptionSchema = new mongoose.Schema({
  MemberId: String,
  Movies: Array,
});

module.exports = mongoose.model("subscriptions", SubscriptionSchema);

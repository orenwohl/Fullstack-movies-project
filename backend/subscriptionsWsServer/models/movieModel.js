const mongoose = require("mongoose");

let MoivesSchema = new mongoose.Schema({
  Name: String,
  Genres: Array,
  Image: String,
  Premiered: String,
});

module.exports = mongoose.model("movies", MoivesSchema);

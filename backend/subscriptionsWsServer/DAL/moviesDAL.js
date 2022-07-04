const axios = require("axios");
const movieModel = require("../models/movieModel");

const getAllMovies = () => {
  return axios.get("https://api.tvmaze.com/shows");
};

const getMovie = (id) => {
  return movieModel.findById(id);
};

const addMovie = (movie) => {
  return movieModel(movie.save());
};

const updateMovie = (id, movie) => {
  return movieModel.findByIdAndUpdate(id, movie);
};

const deleteMovie = (id) => {
  return movieModel.findByIdAndDelete(id);
};

module.exports = { getAllMovies, getMovie, addMovie, updateMovie, deleteMovie };

const movieModel = require("./movieModel");
const moviesDAL = require("../DAL/moviesDAL");
const mongoose = require("mongoose");

const getMovies = async function () {
  if ((await movieModel.collection.countDocuments()) > 1) {
    return new Promise((resolve, reject) => {
      movieModel.find({}, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  } else {
    console.log("created");
    const movies = await moviesDAL.getAllMovies();
    movies.data.forEach((movie) => {
      let movieToInsert = movieModel({
        Name: movie.name,
        Genres: movie.genres,
        Image: movie.image.medium,
        Premiered: movie.premiered,
      });
      movieToInsert.save();
    });
  }
};

const getMovie = (id) => {
  return moviesDAL.getMovie(id);
};

const createMovie = function (movie) {
  let movieToAdd = movieModel({
    Name: movie.Name,
    Genres: movie.Genres,
    Image: movie.Image,
    Premiered: movie.Premiered,
  });
  return moviesDAL.addMovie(movieToAdd);
};

const updateMovie = (id, obj) => {
  let movie = {
    Name: obj.Name,
    Genres: obj.Genres,
    Image: obj.Image,
    Premiered: obj.Premiered,
  };
  return moviesDAL.updateMovie(id, movie);
};

const deleteMovie = (id) => {
  return moviesDAL.deleteMovie(id);
};

module.exports = { getMovies, getMovie, createMovie, updateMovie, deleteMovie };

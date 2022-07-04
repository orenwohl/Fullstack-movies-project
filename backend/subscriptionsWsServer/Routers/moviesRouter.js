const express = require("express");

const router = express.Router();
const moviesBL = require("../models/moviesBL");

//localhost:3000/api/movies
router.get("/", async (req, resp) => {
  let movies = await moviesBL.getMovies();
  return resp.json(movies);
});

router.get("/:id", async (req, resp) => {
  let movie = await moviesBL.getMovie(req.params.id);
  return resp.json(movie);
});

router.post("/", async function (req, res) {
  let obj = req.body;
  let status = await moviesBL.createMovie(obj);
  res.json(status);
});

router.put("/:id", async function (req, res) {
  let id = req.params.id;
  let obj = req.body;
  console.log(obj);
  let status = await moviesBL.updateMovie(id, obj);
  return res.json(status);
});

router.delete("/:id", async (req, resp) => {
  let movie = await moviesBL.deleteMovie(req.params.id);
  return resp.json(movie);
});
module.exports = router;

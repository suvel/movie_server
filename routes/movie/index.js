const router = require("express").Router();
const getMovieList = require("./functions/getMovieList");
const crateNewMovie = require("./functions/crateNewMovie");
const deleteExistingMovie = require("./functions/deleteExistingMovie");
const updateExistingMovie = require("./functions/updateExistingMovie");

/**
 * route: movie/
 * method:GET
 * param: NIL
 * desc: get list of all movies
 */

router.get("/", (req, res, next) => {
  console.log("in movie/");
  getMovieList(req, res, next);
});

/**
 * route: movie/create
 * method:POST
 * param: body(json)
 * required param: movieName, rating, cast, releaseDate
 * desc: get list of all movies
 */

router.post("/create", (req, res, next) => {
  console.log("in movie/create");
  crateNewMovie(req, res, next);
});

/**
 * route: movie/delete/<id>
 * method:DELETE
 * param: param
 * required param: id
 * desc: get list of all movies
 */

router.delete("/delete/:id", (req, res, next) => {
  console.log("in movie/delete");
  deleteExistingMovie(req, res, next);
});

/**
 * route: movie/update/<id>
 * method:PUT
 * param: param
 * required param: id
 * desc: get list of all movies
 */

router.put("/update/:id", (req, res, next) => {
  console.log("in movie/update");
  updateExistingMovie(req, res, next);
});

module.exports = router;

var router = require("express").Router();
/**
 * route: movie/
 * method:GET
 * param: NIL
 * desc: get list of all movies
 */

router.get("/", (req, res, next) => {
  console.log("in movie/");
  fetchAndReposeWitMovieList(req, res, next);
});

/**
 * route: movie/create
 * method:POST
 * param: NIL
 * desc: get list of all movies
 */

router.post("/create", (req, res, next) => {
  console.log("in movie/create");
  crateNewMovie(req, res, next);
});

const readMovies = require("../services/movie/read");
async function fetchAndReposeWitMovieList(req, res, next) {
  try {
    const movieList = await readMovies();
    res.status(202).send({ data: movieList });
  } catch (err) {
    console.log(err);
    next({ code: 500, msg: "Error while reading movies" });
  }
}

const createMovies = require("../services/movie/create");

const validateRequiredMovieArguments = require("../helper/function/validateRequiredMovieArguments");
async function crateNewMovie(req, res, next) {
  const movieAttributes = req.body;
  console.log(movieAttributes);
  try {
    const validations = validateRequiredMovieArguments(movieAttributes);
    if (validations.length > 0) throw { code: 402, msg: validations.join(",") };
    const {movieName, rating, cast, releaseDate} = movieAttributes;
    await createMovies(movieName, rating, cast, releaseDate);
    res.status(200).send({ msg: "Successfully added" });
  } catch (err) {
    console.log(err);
    if (err?.code) {
      next(err);
    }
    next({ code: 500, msg: "Error while creating movie" });
  }
}

module.exports = router;

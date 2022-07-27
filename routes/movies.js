var router = require("express").Router();
/**
 * movie/create
 */

router.get("/", (req, res, next) => {
  console.log("in movie/");
  fetchAndReposeWitMovieList(req, res, next);
});

const readMovies = require("../services/movie/read");
async function fetchAndReposeWitMovieList(req, res, next) {
  try {
    const movieList = await readMovies();
    res.status(202).send(movieList);
  } catch (exe) {
    next({ code: "500", msg: "Error while reading movies" });
  }
}

module.exports = router;

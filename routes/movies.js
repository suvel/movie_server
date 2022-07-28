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

const readMovies = require("../services/movie/read");
async function fetchAndReposeWitMovieList(req, res, next) {
  try {
    const movieList = await readMovies();
    res.status(200).send({ data: movieList });
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
    const { movieName, rating, cast, releaseDate } = movieAttributes;
    await createMovies(movieName, rating, cast, releaseDate);
    res.status(201).send({ msg: "Successfully added" });
  } catch (err) {
    console.log(err);
    if (err?.code) {
      next(err);
    }
    next({ code: 500, msg: "Error while creating movie" });
  }
}

const deleteMovie = require("../services/movie/delete");
async function deleteExistingMovie(req, res, next) {
  try {
    const id = req.params.id;
    if (!id) throw { code: 402, msg: "id is required" };
    const { isDeleted } = await deleteMovie(id);
    if (isDeleted) {
      res.status(200).send();
    } else {
      res.status(202);
    }
  } catch (err) {
    console.log(err);
    if (err?.code) {
      next(err);
    }
    next({ code: 500, msg: "Error while creating movie" });
  }
}

const updateMovie = require("../services/movie/update");
async function updateExistingMovie(req, res, next) {
  try {
    const id = req.params.id;
    const movieAttributes = req.body;
    if (!id) throw { code: 402, msg: "id is required" };
    const responseMovie = await updateMovie(id, movieAttributes);
    if (responseMovie === null) {
      res.status(202).send();
    } else {
      console.log({ responseMovie });
      const updMovie = getUpdatedMovie(responseMovie, movieAttributes);
      res.status(200).send(updMovie);
    }
  } catch (err) {
    console.log(err);
    if (err?.code) {
      next(err);
    }
    next({ code: 500, msg: "Error while updating movie" });
  }
}

const getUpdatedMovie = (movieObject) => {
  console.log(movieObject);
  return {
    movieName: movieObject.movieName,
    rating: movieObject.rating,
    cast: movieObject.cast,
    releaseDate: movieObject.releaseDate,
  };
};

module.exports = router;

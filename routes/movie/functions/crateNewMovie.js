const createMovies = require("../../../services/movie/create");
const validateRequiredMovieArguments = require("../../../helper/function/validateRequiredMovieArguments");

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

module.exports = crateNewMovie;

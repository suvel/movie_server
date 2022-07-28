const readMovies = require("../../../services/movie/read");
async function getMovieList(req, res, next) {
  try {
    const movieList = await readMovies();
    res.status(200).send({ data: movieList });
  } catch (err) {
    console.log(err);
    next({ code: 500, msg: "Error while reading movies" });
  }
}

module.exports = getMovieList;

const Movie = require("../../modal/movie");

const create = (movieName, rating, cast, releaseDate) => {
  console.log("creating movie...");
  const newMovie = new Movie({
    movieName,
    rating,
    cast,
    releaseDate,
  });
  return new Promise((resolve, reject) => {
    newMovie.save().then(
      () => {
        console.log("successfully movie added...");
        resolve();
      },
      (err) => {
        console.log("exception wile adding movie...");
        reject(err);
      }
    );
  });
};

module.exports = create;

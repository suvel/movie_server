const getUpdatedMovie = (movieObject) => {
  console.log(movieObject);
  return {
    movieName: movieObject.movieName,
    rating: movieObject.rating,
    cast: movieObject.cast,
    releaseDate: movieObject.releaseDate,
  };
};

module.exports = getUpdatedMovie;

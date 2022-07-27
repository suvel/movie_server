const mongoose = require("mongoose");
const movieSchema = require('../schema/movie');

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;

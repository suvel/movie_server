const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  movieName: String,
  rating: Number,
  cast: [String],
  releaseDate: Date,
});

module.exports = movieSchema;

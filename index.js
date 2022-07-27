require("dotenv").config();
const connectMovieDB = require("./database/connectMoviesDB");
const movieRoute = require("./routes/movies");
const express = require('express');

const PORT = 3001;

// connecting to DB
(() => {
  try {
    connectMovieDB();
  } catch (exception) {
    console.log(exception);
  }
})();

const app = express();

app.use("/movie", movieRoute);

app.use((err, req, res, next) => {
  // logic
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

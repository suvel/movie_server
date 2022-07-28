require("dotenv").config();
const connectMovieDB = require("./database/connectMoviesDB");
const movieRoute = require("./routes/movie");
const express = require("express");
const cors = require("cors");

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

app.use(cors());
app.use(express.json());

app.use(express.json());

app.use("/movie", movieRoute);

//error handler
app.use((err, req, res, next) => {
  res.status(err.code).send({
    errorMessage: err.msg,
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server Started at ${process.env.PORT || PORT}`);
});

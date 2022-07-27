require("dotenv").config();

const createMovie = require("./services/movie/create");
const connectMovieDB = require("./database/connectMoviesDB");

const mongoDBCred = {
  un: process.env.MONGO_USERNAME,
  pwd: process.env.MONGO_PASSWORD,
};

const mongoDBUrl = `mongodb+srv://${mongoDBCred.un}:${mongoDBCred.pwd}@movieinterview.iwbmkkr.mongodb.net/?retryWrites=true&w=majority`;

// services

(() => {
  try {
    connectMovieDB();
  } catch (exception) {
    console.log(exception);
  }
})();

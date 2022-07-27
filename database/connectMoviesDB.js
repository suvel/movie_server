const mongoose = require("mongoose");
const mongoDBCred = {
  un: process.env.MONGO_USERNAME,
  pwd: process.env.MONGO_PASSWORD,
};
const mongoDBUrl = `mongodb+srv://${mongoDBCred.un}:${mongoDBCred.pwd}@movieinterview.iwbmkkr.mongodb.net/?retryWrites=true&w=majority`;

const connectMovieDB = () => {
  return new Promise((resolve, reject) => {
    console.log("connecting movie database...");
    mongoose.connect(
      mongoDBUrl,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log("exception occurred while connecting movie db");
          reject(err);
        } else {
          console.log("successfully connected with movie db");
          resolve(true);
        }
      }
    );
  });
};

module.exports = connectMovieDB;

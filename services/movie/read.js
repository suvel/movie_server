const Movie = require("../../modal/movie");

const read = () => {
  console.log("reading movies...");
  return new Promise((resolve, reject) => {
    Movie.find().then(
      (result) => {
        console.log("successfully read movies...");
        resolve(result);
      },
      (err) => {
        console.log("exception wile reading movies...");
        reject(err);
      }
    );
  });
};

module.exports = read;

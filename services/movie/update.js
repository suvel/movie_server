const Movie = require("../../modal/movie");

const update = (id, updatedAttributes) => {
  console.log("updating movie...");
  return new Promise((resolve, reject) => {
    Movie.findOneAndUpdate(
      { _id: id },
      { $set: updatedAttributes },
      { returnDocument: "after" }
    ).then(
      (result) => {
        if (result !== null)
          console.log(`successfully updated movie with id:${id} ...`);
        resolve(result);
      },
      (err) => {
        console.log(`exception wile updating movie with id:${id}...`);
        reject(err);
      }
    );
  });
};

module.exports = update;

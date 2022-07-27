const Movie = require("../../modal/movie");

const update = (id, updatedAttributes) => {
  console.log("updating movie...");
  return new Promise((resolve, reject) => {
    Movie.updateOne({ _id: id }, { $set: updatedAttributes }).then(
      (result) => {
        const { modifiedCount, matchedCount } = result;
        console.log(`successfully updated movie with id:${id} ...`);
        resolve({ matchFound: matchedCount > 0, isUpdated: modifiedCount > 0 });
      },
      (err) => {
        console.log(`exception wile updating movie with id:${id}...`);
        reject(err);
      }
    );
  });
};

module.exports = update;

const Movie = require("../../modal/movie");

const del = (id) => {
  console.log("deleting movie...");
  return new Promise((resolve, reject) => {
    Movie.deleteOne({ _id: id }).then(
      (result) => {
        const { deletedCount } = result;
        console.log(`successfully deleted movie with id:${id} ...`);
        resolve({ isDeleted: deletedCount });
      },
      (err) => {
        console.log(`exception wile deleting movie with id:${id}...`);
        reject(err);
      }
    );
  });
};

module.exports = del;

const Movie = require("../../modal/movie");

const del = (id) => {
  console.log("deleting movie...");
  return new Promise((resolve, reject) => {
    Movie.findOneAndDelete({ _id: id }).then(
      (result) => {
        const isDeleted = (result?.deletedCount || 0) > 0;
        if (isDeleted)
          console.log(`successfully deleted movie with id:${id} ...`);
        else console.log(`No collection were removed with id:${id} ...`);
        resolve({ isDeleted });
      },
      (err) => {
        console.log(`exception wile deleting movie with id:${id}...`);
        reject(err);
      }
    );
  });
};

module.exports = del;

const updateMovie = require("../../../services/movie/update");
const getUpdatedMovie = require("./getUpdatedMovie");
async function updateExistingMovie(req, res, next) {
  try {
    const id = req.params.id;
    const movieAttributes = req.body;
    if (!id) throw { code: 402, msg: "id is required" };
    const responseMovie = await updateMovie(id, movieAttributes);
    if (responseMovie === null) {
      res.status(202).send();
    } else {
      console.log({ responseMovie });
      const updMovie = getUpdatedMovie(responseMovie, movieAttributes);
      res.status(200).send(updMovie);
    }
  } catch (err) {
    console.log(err);
    if (err?.code) {
      next(err);
    }
    next({ code: 500, msg: "Error while updating movie" });
  }
}
module.exports = updateExistingMovie;

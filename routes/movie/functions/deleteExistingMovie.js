const deleteMovie = require("../../../services/movie/delete");
async function deleteExistingMovie(req, res, next) {
  try {
    const id = req.params.id;
    if (!id) throw { code: 402, msg: "id is required" };
    const { isDeleted } = await deleteMovie(id);
    if (isDeleted) {
      res.status(200).send();
    } else {
      res.status(202).send();
    }
  } catch (err) {
    console.log(err);
    if (err?.code) {
      next(err);
    }
    next({ code: 500, msg: "Error while creating movie" });
  }
}

module.exports = deleteExistingMovie;

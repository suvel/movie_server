function checkIsArrayOfString(x) {
  return x.every((i) => typeof i === "string");
}
function validateRequiredMovieArguments(movieAttributes) {
  let validation = [];
  // movieName, rating, cast, releaseDate
  if (!movieAttributes?.movieName) {
    validation.push("movieName is required");
  } else if (typeof movieAttributes?.movieName !== "string") {
    validation.push("movieName should be a string");
  }
  if (!movieAttributes?.rating) {
    validation.push("rating is required");
  } else if (typeof movieAttributes?.rating !== "number") {
    validation.push("rating should be a number");
  }
  if (!movieAttributes?.cast) {
    validation.push("cast is required");
  } else if (
    typeof movieAttributes?.cast !== "object" &&
    movieAttributes.hasOwnProperty("length") &&
    checkIsArrayOfString(movieAttributes.cast)
  ) {
    validation.push(
      "cast should be array of string, example ['person1','person2]"
    );
  }
  if (!movieAttributes?.releaseDate) {
    validation.push("releaseDate is required");
  } else if (
    !/^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/.test(
      movieAttributes?.releaseDate
    )
  ) {
    validation.push("releaseDate should be in the formate mm/dd/yy");
  }
  return validation;
}

module.exports = validateRequiredMovieArguments;

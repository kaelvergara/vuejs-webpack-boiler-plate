function concat(...args) {
  args = Array.from(args).filter(e => e !== null);
  const baseArray = Array.isArray(args[0]) ? args[0] : [args[0]];
  return Array.prototype.concat.apply(baseArray, args.slice(1));
}

function displayError(error) {
  return [error.webpackError, ""];
}

function format(errors) {
  const lintErrors = errors.filter(e => e.type === "webpack-error");
  if (lintErrors.length > 0) {
    const flatten = (accum, curr) => accum.concat(curr);
    return concat(
      lintErrors
        .map(error => displayError(error))
        .reduce(flatten, [])
    );
  }

  return [];
}

module.exports = format;

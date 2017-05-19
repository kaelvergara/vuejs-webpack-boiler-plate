const _ = require("lodash");

function isWebpackError (e) {
  return _.isEmpty(e.originalStack) && _.isNil(e.file) && _.has(e, "webpackError");
}

function transform(error) {
  if (isWebpackError(error)) {
    return Object.assign({}, error, {
      name: "Webpack error",
      type: "webpack-error"
    });
  }

  return error;
}

module.exports = transform;
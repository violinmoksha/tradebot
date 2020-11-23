module.exports = promise =>
  promise
    .then(result => [null, result])
    .catch(error => [error, null]);

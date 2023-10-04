const loggerOne = (request, response, next) => {
  console.log(`Request to: ${request.originalUrl}`);
  next();
};

module.exports = loggerOne;
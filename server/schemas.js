var questionsRoute = require('./schemas/questions.json');
var statesRoute = require('./schemas/states.json');
var businessesRoute = require('./schemas/businesses.json');

module.exports = function () {
  return {
    questionsRoute,
    statesRoute,
    businessesRoute
  }
}
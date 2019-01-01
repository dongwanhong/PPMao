const testRouters = require('./manage/test');

module.exports = function(app) {
  return testRouters(app);
};

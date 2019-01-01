const data = require('../../data');

module.exports = function (app) {
  app.get('/local/data', (req, res) => {
    res.json( data.testData );
  });
};

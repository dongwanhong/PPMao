const data = require('../../data');

module.exports = (app) => {
  app.get('/user/login', (req, res) => {
    if (req.query.username === 'admin' && req.query.password === 'Admin123') {
      res.json(data.users);
    } else {
      res.json({
        error: 'Error: The user does not exist.',
      });
    }
  });
};

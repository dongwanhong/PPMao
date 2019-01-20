const data = require('../../data');

module.exports = (app) => {
  app.get('/user/login', (req, res) => {
    const {
      users,
    } = data;
    const result = users.find(item => (
      req.query.username === item.username && req.query.password === item.password
    ));

    if (result) {
      /* 过滤前台不需要的和用户的机密信息 */
      const userInfo = {};
      const useless = ['id', 'password'];
      Object.keys(result).forEach((key) => {
        if (!useless.includes(key)) {
          userInfo[key] = result[key];
        }
      });

      res.json({
        token: Math.random().toString(36).substr(2),
        userInfo,
      });
    } else {
      res.json({
        errorCode: 'USER_LOGIN_PASSWORD_MISMATCH',
      });
    }
  });
};

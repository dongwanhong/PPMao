const route = require('./routers');

// 导出请求，在 webpack-dev-confog.js 中结合 devServer 字段实现数据 Mock
module.exports = function mock(app) {
  route(app);
}

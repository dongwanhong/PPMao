const path = require('path');
const webpack = require('webpack');
// 引入公共配置
const webpackBaseConfig = require('./webpack.base.config');
// 合并配置的插件
const webpackMerge = require('webpack-merge');
// 配置加载本地数据
const mock = require('../mock');

module.exports = webpackMerge(webpackBaseConfig, {
  // 指定模式
  mode: 'development',
  // devtool由 webpack 直接提供，将打包后的文件中的错误映射到最初对应的文件中，便于调试
  devtool: 'cheap-module-eval-source-map',
  // 对 webpack-dev-server 进行配置
  devServer: {
    /* 静态服务的域名，在使用 Nginx 来做反向代理时，使用该配置来指定 Nginx 配置使用的服务域名
     *
     * publicPath: 'http://localhost:3000/',
     */
    /* 服务器的主机号，默认是 localhost
     * 将该地址设为电脑的 ip 地址，局域网内的移动设备通过访问该地址下的30端口即可访问 web 应用
     */
    host: 'localhost',
    // 端口，默认是 8080
    port: 3000,
    /*
     * 将特定 URL 的请求代理到另一台服务器
     * 比如将 URL 中带有 /api 的请求代理到本地的 3000 端口的服务上并清除 path 中的 api 字段
     * 更多内容见 https://github.com/chimurai/http-proxy-middleware
     * 
     * '/api': {
     *   target: "http://localhost:3000",
     *   pathRewrite: { '^/api': '' },
     * },
     */
    // 提供额外静态文件内容的目录
    contentBase: path.join(__dirname, "../dist"),
    /* 重定向路由？
     *
     * historyApiFallback: {
     *   rewrites: [{
     *     from: /./,
     *     to: '/404.html'
     *   }]
     * },
     */
    // 热模块替换机制
    hot: true,
    hotOnly: true,
    /* 默认为 true, 意思是，在打包时会注入一段代码到最后的 js 文件中，用来监视页面的改动而自动刷新页面
     * 当为 false 时，网页自动刷新的模式是 iframe，也就是将模板页放在一个 frame中
     *
     * inline: true,
     */
    // 在浏览器中打开
    open: true,
    // Display only errors to reduce the amount of output
    // stats: "errors-only",
    /* 对所有的服务器资源采用 gzip 压缩 
     * 对 JS，CSS 资源的压缩率很高，可以极大得提高文件传输的速率
     * 但是需要服务端要对文件进行压缩，客户端进行解压，增加了两边的负载
     * 
     * compress: true
     */
    // before 在 webpack-dev-server 静态资源中间件处理之前，可以用于拦截部分请求返回特定内容，或者实现简单的数据 mock
    before: (app, server) => {
      mock(app);
    },
    // after 在 webpack-dev-server 静态资源中间件处理之后，比较少用到，可以用于打印日志或者做一些额外处理。
    // When set to true this option bypasses host checking
    disableHostCheck: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});

const path = require('path');
// 引入公共配置
const webpackBaseConfig = require('./webpack.base.config');
// 合并配置的插件
const webpackMerge = require('webpack-merge');
// 用于分离 CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 删除冗余 CSS
const glob = require('glob');
const PurifyCssWebpack = require('purifycss-webpack');
// 用于在生成之前删除/清理生成文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin')

// 设置将会被清理的文件或目录
const pathsToClean = [
  'dist/*',
]

// the clean options to use
const cleanOptions = {
  root: path.resolve(__dirname, '../'),  // root of your package
  exclude: [],                          // not removing shared files
  verbose: true,                        // Write logs to console
  dry: false,                       // test/emulate delete
}

module.exports = webpackMerge(webpackBaseConfig, {
  // 指定模式
  mode: 'production',
  // 加载器
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'postcss-loader', // Automatically add browser prefix
      }, {
        loader: 'less-loader' // compiles Less to CSS
      }]
    }]
  },
  // 插件配置
  plugins: [
    new PurifyCssWebpack({
      paths: glob.sync(path.join(__dirname, '../*.html'))
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      // chunkFilename: "[id].css"
    }),
    // 配置 CleanWebpackPlugin
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
  ]
});

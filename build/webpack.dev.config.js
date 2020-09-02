/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 开发环境配置
 */ 
const path = require("path");

const baseConfig = require("./webpack.base.config.js");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/',
    host: '0.0.0.0',
    useLocalIp: true,
    compress: true,
    port: 8080,
    hot: true,
    overlay: true,
  }
});

const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  entry: [
    // 'webpack/hot/dev-server',
    'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr&reload=true',
    './src/index.js',
  ],
  devtool: 'eval-source-map',
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      title: 'iconic (dev)',
      template: './src/template.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

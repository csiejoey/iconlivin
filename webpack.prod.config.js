const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  entry: [
    './src/index.js',
  ],
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true,
      },
    }),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      title: 'iconic (prod)',
      template: './src/template.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/assets/favicon.ico' },
      { from: 'src/assets/favicon.gif' },
    ]),
  ],
});

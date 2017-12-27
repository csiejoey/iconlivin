const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack.loaders');

module.exports = {
  output: {
    filename: '[hash].bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    loaders,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

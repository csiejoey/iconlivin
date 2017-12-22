const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    // 'webpack/hot/dev-server',
    'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr&reload=true',
    './src/index.js',
  ],
  devtool: 'eval-source-map',
  output: {
    filename: '[hash].bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      title: 'taitle',
      template: './src/template.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};

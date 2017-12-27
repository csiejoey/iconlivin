module.exports = [
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
];

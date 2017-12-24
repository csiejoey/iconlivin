/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const express = __webpack_require__(3);
const webpack = __webpack_require__(0);
const WebpackDevMiddleware = __webpack_require__(4);
const WebpackHotMiddleware = __webpack_require__(5);
const path = __webpack_require__(1);
const config = __webpack_require__(6);

const port = 8080;

const app = express();
const router = express.Router();

const compiler = webpack(config);

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));

app.use(WebpackHotMiddleware(compiler, {
  log: console.log
}));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.use(router);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
  next();
});

app.listen(port, () => console.log(`listening on ${port}`));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(1);
const webpack = __webpack_require__(0);
const HTMLWebpackPlugin = __webpack_require__(7);

module.exports = {
  entry: [
  // 'webpack/hot/dev-server',
  'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr&reload=true', './src/index.js'],
  devtool: 'eval-source-map',
  output: {
    filename: '[hash].bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.sass$/,
      loader: ['style-loader', 'css-loader', 'sass-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [new HTMLWebpackPlugin({
    filename: 'index.html',
    title: 'buildin (dev)',
    template: './src/template.html'
  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), new webpack.optimize.OccurrenceOrderPlugin()]
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map
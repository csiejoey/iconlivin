const express = require('express');
const path = require('path');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('../webpack.dev.config');

const port = 8080;

const app = express();
const router = express.Router();
const compiler = webpack(config);

if (process.env.NODE_ENV === 'dev') {
  app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true },
  }));
  app.use(WebpackHotMiddleware(compiler, {
    log: console.log,
  }));
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
} else {
  console.log(process.env.NODE_ENV); // defineplugin not working
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}

app.use(router);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
  next();
});

app.use(express.static('public'));

app.listen(port, () => console.log(`listening on ${port}`));

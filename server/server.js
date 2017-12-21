const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const config = require('../webpack.dev.config');

const port = 8080;

const app = express();
const router = express.Router();

const compiler = webpack(config);

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
app.use(router);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
  next();
});

app.listen(port, () => console.log(`listening on ${port}`));

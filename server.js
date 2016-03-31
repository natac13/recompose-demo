import express from 'express';
import path from 'path';
import Promise from 'bluebird';
const readFile = Promise.promisify(require('fs').readFile);

const port = process.env.PORT || 3013;

/** Webpack imports ***/
import webpack from 'webpack';
import config from './webpack.config.js';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const compiler = webpack(config);
const webpackOptions = {
  publicPath: config.output.publicPath,
  quiet: false,
  // hides all the bundling file names
  noInfo: true,
  // adds color to the terminal
  stats: {
    colors: true,
  },
};

// Controllers

const apiRouter = express.Router();
apiRouter.get('/todos', (req, res) => {
  try {
    const result = require('./app/assets/todoList.json');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

const app = express();

app.use(webpackMiddleware(compiler, webpackOptions));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, '../build')));
app.use('/api', apiRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, 'localhost', () => {
  console.log('Listening on Port ' + port);
});

export default app;

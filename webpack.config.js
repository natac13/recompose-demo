import path from 'path';
import webpack from 'webpack';

const buildPath = path.join(__dirname, 'build');
const entry = path.join(__dirname, 'app', 'index.js');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    // sets up an ES6-ish environment with promise support
    'babel-polyfill',
    // webpack-hot-middleware needs this
    'webpack-hot-middleware/client',
    // the main application script
    entry,
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/', // need for hot reload. or hit refresh each time
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.node'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
  ],
};

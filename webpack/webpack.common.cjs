const HtmlWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const Dotenv = require('dotenv-webpack');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const path = require('path');
const { webpack } = require('@mohantalachutla/mfe-utils/lib/index.cjs');

const packageJson = require(path.resolve(__dirname, '../package.json'));
const deps = packageJson.dependencies;
const appUrl = `${packageJson.app.host}:${packageJson.app.port}/`;

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib'),
    publicPath: appUrl,
  },

  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      '#': path.resolve(__dirname, '../'),
    },
    mainFiles: ['index'],
    enforceExtension: false,
    extensions: ['.jsx', '.js', '.json'],
    mainFields: ['browser', 'module', 'main'],
  },

  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  target: 'web', // target web or node
  plugins: [
    webpack.configureMFRemoteReactPlugin(ModuleFederationPlugin)(
      'host_starter',
      {
        mfe_starter: 'mfe_starter@http://localhost:8081/remoteEntry.js',
      },
      deps
    ),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new Dotenv(),
    // new NodePolyfillPlugin(), // to inject polyfills
  ],
};

const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const Dotenv = require("dotenv-webpack");
const path = require("path");
const { webpack } = require("@mohantalachutla/mfe-utils/lib/index.cjs");

const packageJson = require(path.resolve(__dirname, "../package.json"));
const deps = packageJson.dependencies;
const appUrl = `${packageJson.app.host}:${packageJson.app.port}/`;

module.exports = {
  output: {
    publicPath: appUrl,
  },

  resolve: {
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    alias: {
      "#": path.resolve(__dirname, "../"),
    },
    mainFiles: ["index"],
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    webpack.configureMFRemoteReactPlugin(ModuleFederationPlugin)(
      "host_starter",
      {
        mfe_starter: "mfe_starter@http://localhost:8081/remoteEntry.js",
      },
      deps
    ),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
    }),
    new Dotenv(),
  ],
};

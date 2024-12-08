const path = require('path');

const { ModuleFederationPlugin } = require('webpack').container;
const { webpack } = require('@mohantalachutla/mfe-utils/lib/index.cjs');

const packageJson = require(path.resolve(__dirname, '../package.json'));
const deps = packageJson.dependencies;

module.exports = {
  plugins: [
    webpack.configureMFRemoteReactPlugin(ModuleFederationPlugin)(
      'host_starter',
      {
        mfe_starter: 'mfe_starter@http://localhost:8081/remoteEntry.js',
      },
      deps
    ),
  ],
  resolve: {
    fallback: {
      // core node modules
      process: require.resolve('process/browser'),
      path: require.resolve('path-browserify'),
      assert: false,
      util: false,
      buffer: false,
      fs: false,
      http: false,
      https: false,
      stream: false,
      zlib: false,
      os: false,
      url: false,
      net: false,
      crypto: false,
    },
  },
};

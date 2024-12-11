const path = require('path');

const { ModuleFederationPlugin } = require('webpack').container;
const { webpack } = require('@mohantalachutla/mfe-utils/lib/index.cjs');
const { getFallbackConfig } = require('../scripts/index.cjs');

const packageJson = require(path.resolve(__dirname, '../package.json'));
const deps = packageJson.dependencies;

const nodeModules = {
  assert: false,
  buffer: false,
  console: false,
  constants: false,
  crypto: false,
  domain: false,
  events: false,
  fs: false,
  http: false,
  https: false,
  net: false,
  os: false,
  path: false,
  punycode: false,
  process: false,
  querystring: false,
  stream: false,
  string_decoder: false,
  timers: false,
  tty: false,
  url: false,
  util: false,
  vm: false,
  zlib: false,
};

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
      ...getFallbackConfig(nodeModules),
    },
  },
};

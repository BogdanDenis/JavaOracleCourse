const merge = require('webpack-merge');
const baseConfig = require('./config/webpack.config.base');
const devConfig = require('./config/webpack.config.dev');
const prodConfig = require('./config/webpack.config.prod');

let config;

if (process.env.NODE_ENV !== 'production') {
  config = merge.smart(baseConfig, devConfig);
} else {
  config = merge.smart(baseConfig, prodConfig);
}

module.exports = config;

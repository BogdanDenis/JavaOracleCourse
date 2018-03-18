const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: './images/',
          publicPath: '.',
        }
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: '../'
          }
        }]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    stats: {
      colors: true,
    },
  },
};

var path = require('path');
var webpack = require('webpack');

module.exports = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  resolve: {
    modules: ['node_modules']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash'
    })
  ]
};
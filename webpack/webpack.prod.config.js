const common = require('./webpack.common.config.js')
const { merge } = require('webpack-merge')
const MinimizeCssAssetsPlugin = require('mini-css-extract-plugin')


module.exports = merge(common, {
  output: {
    filename: '[name].[contenthash:12].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ MinimizeCssAssetsPlugin.loader, 'css-loader' ]
      }
    ] 
  } ,
  plugins: [
    new MinimizeCssAssetsPlugin({
      filename: '[name].[contenthash:12].css',
    })
  ]
})
var rm = require('rimraf')
var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.config.js')


rm(path.resolve(__dirname, '../dist'), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    if (err) throw err

    console.log('  Build complete.\n')
  })
})

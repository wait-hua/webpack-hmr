var express = require('express');
var webpack = require('webpack');
var path = require('path');
var opn = require('opn');

var webpackConfig = require('./webpack.dev.config.js');
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  inline: true,
  stats: {
    colors: true,
    chunks: false
  }
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
    opn('http://localhost:3002')
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  publicPath: webpackConfig.output.publicPath
})

var app = express();
app.use(devMiddleware);
app.use(hotMiddleware);

app.listen(3002, ()=>{
    console.log('> Listener at 3002...');
})

let express = require('express');
let webpack = require("webpack");
// const fs = require('fs')
let app = express()
const config = require('./webpack.config')

let compiler = webpack(config);

app.use(express.static('./assets'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler));

app.listen(9000, '127.0.0.1', function(err) {
  err && console.log(err);
});
let express = require('express');
let webpack = require("webpack");
const fs = require('fs')
let app = express()
const config = require('./webpack.config')

let compiler = webpack(config);

app.use(express.static('./assets'));
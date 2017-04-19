import React from 'react';//import是es6的语法，webpack怎么能认识呢，原因就在babel-loader，它可以把import解析成require。同理，css-loader也会把@import和URL（）解析成require：https://github.com/webpack-contrib/css-loader
import ReactDOM from 'react-dom';
import {Main} from './pages/main/main.jsx';

// require ('normalize-scss/sass/_normalize.scss');
require ('./app.scss');



ReactDOM.render(
  <Main/>,document.getElementById('app')
);

if(module.hot){
  module.hot.accept()
}
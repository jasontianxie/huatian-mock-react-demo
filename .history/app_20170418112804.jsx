import React from 'react';//import是es6的语法，webpack怎么能认识呢，原因就在babel-loader，它可以把import解析成require。同理，css-loader也会把@import和URL（）解析成require：https://github.com/webpack-contrib/css-loader
import ReactDOM from 'react-dom';
import {Main} from './components/main.jsx';

// require ('normalize-scss/sass/_normalize.scss');
// require ('./components/main.scss');
// require ('./assets/css/function.scss');


ReactDOM.render(
  <Main/>,document.getElementById('app')
);
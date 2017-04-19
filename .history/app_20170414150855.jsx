import React from 'react';//import是es6的语法，webpack怎么能认识呢，原因就在babel-loader，它可以把import解析成require。
import ReactDOM from 'react-dom';
import {Main} from './components/main.jsx';


ReactDOM.render(
  <Main/>,document.getElementById('app')
);
import React,{Component} from 'react';
import {ShoppingCart} from './shoppingCart/index.jsx';
const main = require('../build/postcss-modules/main.json');

require('../assets/css/function.scss');
require('./main.scss');

class Main extends Component{
  render(){
    return(
      <div>
      <ShoppingCart/>
      <div className={main.aaa}>this is the page</div>
      </div>
    );
  }
}

export {Main};
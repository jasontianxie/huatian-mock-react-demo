import React,{Component} from 'react';
const shoppingCart = require('./postcss-modules/function.json');
require('../../assets/css/function.scss');

class ShoppingCart extends Component{
  render(){
    return(
      <div className={shoppingCart.sss}>this is the page2222</div>
    );
  }
}

export {ShoppingCart};
import React,{Component} from 'react';
import {ShoppingCart} from '../shoppingCart/index';
const prefixName = 'main';

class Main extends Component{
  render(){
    return(
      <div>
      <ShoppingCart/>
      <div className={`${prefixName}-aaa`}>this is the page111111122</div>
      </div>
    );
  }
}

export {Main};
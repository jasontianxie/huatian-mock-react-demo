import React,{Component} from 'react';
import {ShoppingCart} from '../shoppingCart/index.jsx';
const prefixName = 'main';

class Main extends Component{
  render(){
    return(
      <div>
      <ShoppingCart/>
      <div className={`${prefixName}-aaa`}>this is the page test</div>
      </div>
    );
  }
}
if(module.hot){
  module.hot.accept()
}
export {Main};
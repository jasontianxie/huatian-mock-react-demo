import React,{Component} from 'react';
const prefixName='shoppingCart';
class ShoppingCart extends Component{
  render(){
    return(
      <div className={`${prefixName}-sss`}>this is the page shop</div>
    );
  }
}

export {ShoppingCart};
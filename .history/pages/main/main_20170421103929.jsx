import React,{Component} from 'react';
// import {ShoppingCart} from '../shoppingCart/index.jsx';

const prefixName = 'main';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
      <div className={`${prefixName}-aaa`}>this is the page test</div>
      </div>
    );
  }
}
// if(module.hot){
//   module.hot.accept()
// }
export {Main};
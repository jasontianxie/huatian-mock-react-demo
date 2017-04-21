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
      <div className={`${prefixName}-aaa`}>
        <input type="text"/>
        <div className={`${prefixName}-bbb`}>this is the page</div>
      </div>
      </div>
    );
  }
}
// if(module.hot){
//   module.hot.accept()
// }
export {Main};
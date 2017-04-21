import React,{Component} from 'react';
const prefixName='shoppingCart';
class ShoppingCart extends Component{
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render(){
    return(
      <div className={`${prefixName}-sss`}><input type="text"/></div>
    );
  }
}
// if(module.hot){
//   module.hot.accept()
// }
export {ShoppingCart};
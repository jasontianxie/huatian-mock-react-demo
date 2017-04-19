import React,{Component} from 'react';
const main = require('../build/postcss-modules/main.json');

class  extends Component{
  render(){
    return(
      <div className={main.aaa}>this is the page</div>
    );
  }
}

export {Main};
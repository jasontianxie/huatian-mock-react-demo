import React,{Component} from 'react';

const prefixName = 'main';

class Main extends Component{
  render(){
    return(
      <div className={`${prefixName}-aaa`}>this is the page1</div>
    );
  }
}

export {Main};
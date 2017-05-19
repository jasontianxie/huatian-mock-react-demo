import React,{Component} from 'react';
// import {ShoppingCart} from '../shoppingCart/index.jsx';
// import headPic from '../../assets/img/shouye-3.png';
import {List} from '../../components/list/index.jsx'

const prefixName = 'main';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    const listDetial = [["会员卡管理","card_icon"],["地址管理","addresses"],["删除管理","delete"],["编辑管理","edit"],["会员卡管理","card_icon"],["地址管理","addresses"],["删除管理","delete"],["编辑管理","edit"],["会员卡管理","card_icon"],["地址管理","addresses"],["删除管理","delete"],["编辑管理","edit"]];
    return(
        <div className={`${prefixName}`}>
          <div className={`${prefixName}-top`}>
            <div className={`${prefixName}-headWrap`}>
              <div className={`${prefixName}-head`}>
                {/*<img src={headPic} />*/}
              </div>
            </div>
            <div className={`${prefixName}-username`}>
              jason
            </div>
            <div className={`${prefixName}-bandWrap`}>
              <div className={`${prefixName}-band`}>
              </div>
              <div className={`${prefixName}-bandTxt`}>
                中级等级
              </div>
            </div>
          </div>
          <div className={`${prefixName}-tabs`}>
            <div className={`${prefixName}-tab`}>
              <div className={`${prefixName}-tabTop`}>
                0
              </div>
              <div className={`${prefixName}-tabBottom`}>
                我的订单
              </div>
            </div>
            <div className={`${prefixName}-tab`}>
              <div className={`${prefixName}-tabTop`}>
                0
              </div>
              <div className={`${prefixName}-tabBottom`}>
                我的储值
              </div>
            </div>
            <div className={`${prefixName}-tab`}>
              <div className={`${prefixName}-tabTop`}>
                0
              </div>
              <div className={`${prefixName}-tabBottom`}>
                我的积分
              </div>
            </div>
          </div>
          <div className={`${prefixName}-listWrap`}>
            {listDetial.map((item,index,array) => (
              <List title={item[0]} picName={item[1]} key={index}/>
            )
            )}
            
          </div>
        </div>
    );
  }
}
// if(module.hot){
//   module.hot.accept()
// }
export {Main};
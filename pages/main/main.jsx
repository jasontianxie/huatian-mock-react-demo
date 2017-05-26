import React,{Component} from 'react';
// import {initialState} from '../initialState.js';
// import {ShoppingCart} from '../shoppingCart/index.jsx';
// import headPic from '../../assets/img/shouye-3.png';
import {List} from '../../components/list/index.jsx';
import {hashHistory} from 'react-router';
import { connect } from 'react-redux';

const prefixName = 'main';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  };
  jumpToNewPage(){
    hashHistory.push('/userInfo');
  };
  componentDidMount(){
    this.props.changeData();//子组件改变父组件状态，子组件单击保存，如果是蓝色，则父组件的订单和储值数量加5，否则数量不变
  }
  render(){
    const listDetial = [["会员信息","card_icon"],["地址管理","addresses"],["删除管理","delete"],["编辑管理","edit"],["会员信息","card_icon"],["地址管理","addresses"],["删除管理","delete"],["编辑管理","edit"],["会员信息","card_icon"],["地址管理","addresses"],["删除管理","delete"],["编辑管理","edit"]];
    // console.log(this.props.state);
    // console.log(this.props.onClick);
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
                {this.props.state.main.rest}
              </div>
              <div className={`${prefixName}-tabBottom`}>
                我的订单
              </div>
            </div>
            <div className={`${prefixName}-tab`}>
              <div className={`${prefixName}-tabTop`}>
                {this.props.state.main.rest}
              </div>
              <div className={`${prefixName}-tabBottom`}>
                我的储值
              </div>
            </div>
            <div className={`${prefixName}-tab`} onClick={this.props.onClick}>
              <div className={`${prefixName}-tabTop`}>
                {this.props.state.main.score}
              </div>
              <div className={`${prefixName}-tabBottom`}>
                我的积分
              </div>
            </div>
          </div>
          <div className={`${prefixName}-listWrap`}>
            {listDetial.map((item,index,array) => (
              <List title={item[0]} picName={item[1]} key={index} onClick={this.jumpToNewPage}/>
            )
            )}
            
          </div>
        </div>
    );
  }
};
let userInfoState = '';//子组件改变父组件状态，子组件单击保存，如果是蓝色，则父组件的订单和储值数量加5，否则数量不变
const mapStateToProps = (state) => {
  userInfoState = state.userInfo;//子组件改变父组件状态，子组件单击保存，如果是蓝色，则父组件的订单和储值数量加5，否则数量不变
  return {
    state: state//组件的子state名字是在combineReducer中定义的
  }
};
// const mapDispatchToProps = {
//   onClick: () => {
//     type: 'SET_VISIBILITY_FILTER'
//   }
// };
const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch({
        type: 'INCREASE'
      });
    },
    changeData: () => {//子组件改变父组件状态，子组件单击保存，如果是蓝色，则父组件的订单和储值数量加5，否则数量不变
      dispatch({
        type: 'DATA',
        color:userInfoState
      });
    }
  };
}
const ContainerMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
export {ContainerMain};
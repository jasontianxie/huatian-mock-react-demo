import React,{Component} from 'react';
import { connect } from 'react-redux';

const prefixName='userInfo';
class UserInfo extends Component{
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render(){
    // console.log(this.props.state);
    // console.log(this.props.onClick);
    return(
      <div className={`${prefixName}-wrap`}>
        <div className={`${prefixName}`}>
          <div className={`${prefixName}-list`}>
            <span>姓&nbsp;&nbsp;名</span><input type="text" placeholder="请输入姓名"/>
          </div>
          <div className={`${prefixName}-list`}>
            <span>性&nbsp;&nbsp;别</span><input type="text" placeholder="请输入性别"/>
          </div>
          <div className={`${prefixName}-list`}>
            <span>电&nbsp;&nbsp;话</span><input type="text" placeholder="请输入电话"/>
          </div>
          <div className={`${prefixName}-list`}>
            <span>地&nbsp;&nbsp;址</span><input type="text" placeholder="请输入地址"/>
          </div>
          <div className={`${prefixName}-save ${prefixName}-${this.props.state}`} onClick={this.props.onClick}>
            保存
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.userInfo//组件的子state名字是在combineReducer中定义的
  }
};
const mapDispatchToProps = (
  dispatch
) => {
  return {
    onClick: () => {
      dispatch({
        type: 'CHANGECOLOR'
      });
    }
  };
}
const ContainerUserInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
export {ContainerUserInfo};
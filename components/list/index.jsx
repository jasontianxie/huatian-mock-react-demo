import React,{Component} from 'react';
const prefixName = 'component-list';

export const List = (props) => {
    return(
        <div className={`${prefixName}`}>
            <div className={`${prefixName}-left`}>
                <div className={`${prefixName}-icon`}>
                    <img src={`${publicPath}/img/${props.picName}.svg`} alt="no pic"/>
                </div>
                <div className={`${prefixName}-text`}>
                    {props.title}
                </div>
            </div>
            <div className={`${prefixName}-arrow`}>
                &gt;
            </div>
        </div>
    );
}
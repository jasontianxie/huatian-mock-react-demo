import {initialState} from '../initialState.js';
const userInfoReducer = (state = initialState.userInfo , action) => {
    switch (action.type) {
        case 'CHANGECOLOR':
        // console.log('clicked');
        // return Object.assign({},state,{userInfo:state.userInfo === 'yellowgreen'?'blue':'yellowgreen'});
        return state === 'yellowgreen'?'blue':'yellowgreen';
        default:
        return state;
    }
}

export {userInfoReducer};
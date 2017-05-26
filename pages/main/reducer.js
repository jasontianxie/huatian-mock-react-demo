import {initialState} from '../initialState.js';
const mainReducer = (state = initialState.main , action) => {
    switch (action.type) {
        case 'INCREASE':
        // console.log('clicked');
        // return Object.assign({},{main:state+1});
        return Object.assign({},state,{score:state.score+1});
        case 'DATA':
        if(action.color === 'yellowgreen')
        {
             return state
        } else {
            return Object.assign({},state,{rest:state.rest+5});
        }
       
        default:
        return state;
    }
}

export {mainReducer};
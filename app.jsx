import React from 'react';//import是es6的语法，webpack怎么能认识呢，原因就在babel-loader，它可以把import解析成require。同理，css-loader也会把@import和URL（）解析成require：https://github.com/webpack-contrib/css-loader
import ReactDOM from 'react-dom';
import {ContainerMain} from './pages/main/main.jsx';
import {mainReducer} from './pages/main/reducer.js';
import {ContainerUserInfo} from './pages/userInfo/index.jsx';
import {userInfoReducer} from './pages/userInfo/reducer.js';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducers = combineReducers({
  userInfo:userInfoReducer,
  main:mainReducer
})
const store = createStore(reducers);

// require ('normalize-scss/sass/_normalize.scss');
require ('./app.scss');

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={ContainerMain}/>
        <Route path="/userInfo" component={ContainerUserInfo}/>
      </Router>
    </Provider>
),document.getElementById('app')
);

// if (module.hot) {
//   module.hot.accept('./build', () => {
//     render(App)
//   });
// }

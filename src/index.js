import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux'; 
// import rootReducers from './services/reducers/index';
import App from './App';
// const store = createStore(rootReducers)
// console.log(store);
import { Provider as ReduxStoreProvider } from 'react-redux';
import {store} from './redux/Store'
ReactDOM.render(
  <ReduxStoreProvider store = {store}>
    <App />
 </ReduxStoreProvider>,
  document.getElementById('root')
);



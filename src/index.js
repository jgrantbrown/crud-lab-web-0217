import React from 'react';
import ReactDOM from 'react-dom';
import  App  from './App';
import manageRestaurant from './reducers/manageRestaurant';
import { Provider } from 'react-redux';
// import createStore from './createStore';
import { createStore } from 'redux';


const store = createStore(manageRestaurant);
const rootElement = document.getElementById('root');

// function render() {
  ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,rootElement);
// };


// export const renderer = { render: render };

// store.dispatch({ type: '@@init' });

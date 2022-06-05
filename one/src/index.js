import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './dist/output.css';
import {createStore} from 'redux';
import AllReducers from './reducers/index' ;  
import {Provider} from 'react-redux'

const store =createStore(AllReducers, /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



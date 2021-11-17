import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux'
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import appReducer from './assets/reducers/appReducer'

const appStore = createStore(appReducer);

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch

require('dotenv').config()

ReactDOM.render(
  <Provider store={appStore} >
    <App />
  </Provider>,
  document.getElementById('root')
)
reportWebVitals();
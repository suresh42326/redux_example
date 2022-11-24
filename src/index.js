import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {reducer} from './store/reducer'

const store = configureStore({reducer:reducer})
ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));

reportWebVitals();

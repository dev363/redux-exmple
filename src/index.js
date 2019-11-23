import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Provider} from "react-redux"

// Actions
import updateUserAction from "./actions/userAction"

// Store
import store from "./store"


// Dispatchers



ReactDOM.render(
  <Provider store={store}><App /> </Provider>,
  document.getElementById('root')
);

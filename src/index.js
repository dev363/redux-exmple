import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {combineReducers, createStore} from 'redux'

function productReducer(state=[], action){

	return state;
}

function userReducer(state="", action){

	return state;
}

const allReducer= combineReducers({
	product:productReducer,
	user:userReducer
})

const action={
	type:"changeState",
	payload:{
		newState:"new State"
	}
}



const store= createStore(allReducer);

console.log(store.getState())
store.dispatch(action)
console.log(store.getState())

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

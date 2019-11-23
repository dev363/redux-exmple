import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {combineReducers, createStore} from 'redux'

// Reducers
function productReducer(state=[], action){

	return state;
}

function userReducer(state="", {type, payload}){

	switch(type){
		case 'changeUser':
			return payload.name
		default:
			return state;
	}

}

const allReducer= combineReducers({
	product:productReducer,
	user:userReducer
})

// Actions

const updateUserAction={
	type:"changeUser",
	payload:{
		name:"John deo"
	}
}



// Store
const store= createStore(allReducer,{
	product:[{name:"i phone"}],
	user:"Michel"
},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

// Dispatchers

console.log(store.getState())
store.dispatch(updateUserAction)
console.log(store.getState())

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

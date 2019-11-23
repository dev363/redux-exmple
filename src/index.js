import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore} from 'redux'

function reducer(state, action){
	console.log(state, action)
	if(action.type==="changeState"){
		return action.payload.newState
	}
	return "_state_";
}

const action={
	type:"changeState",
	payload:{
		newState:"new State"
	}
}



const store= createStore(reducer);

console.log(store.getState())
store.dispatch(action)
console.log(store.getState())

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

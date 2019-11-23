import {combineReducers} from 'redux'

// Reducers
import productReducer from "./productReducer"
import userReducer from "./userReducer"



const allReducer= combineReducers({
	product:productReducer,
	user:userReducer
})


export default allReducer

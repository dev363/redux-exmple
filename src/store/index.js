import {createStore} from "redux"
// Reducers
import allReducer from "../reducers"


const store= createStore(allReducer,{
	product:[{name:"i phone"}],
	user:"Michel"
},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export default store
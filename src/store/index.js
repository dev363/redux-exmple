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




// import {createStore,applyMiddleware} from "redux"
// import thunk from 'redux-thunk';

// // Reducers
// import allReducer from "../reducers"


// const store= createStore(allReducer,
// {
// 	product:[{name:"i phone"}],
// 	user:"Michel"
// },
// applyMiddleware(thunk)
// );

// export default store
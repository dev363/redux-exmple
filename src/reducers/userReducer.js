
export default function userReducer(state="", {type, payload}){

	switch(type){
		case 'changeUser':
			return payload.name
		default:
			return state;
	}

}

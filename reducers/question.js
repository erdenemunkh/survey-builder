import * as ACTIONS from "../constants/actions";

const initialState = {
	id: undefined,
    statement: undefined,
    responseType: undefined,
    responseOptions: undefined,
    responseTextRows: undefined,
    responseRange: undefined,
    placeholder: undefined,
    multiple: undefined
};

const questionReducer = (state=initialState, action) => {
    const { type } = state;
    switch(type) {
    	case ACTIONS.CHANGE_RESP:
    		return {
    			...state,
    			response: action.value
    		};
    		break;
    }
    return state;
};

export default questionReducer;

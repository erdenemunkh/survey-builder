import * as ACTIONS from "../constants/actions";
import questionReducer from "./question";

const initialState = [];

const questionsReducer = (state=initialState, action) => {
    const { type } = state;
    let index;
    switch(type) {
    	case ACTIONS.CHANGE_RESP:
    		index = state.findIndex(q => q.id===action.id);
    		if(index!==-1) {
    			return [
    				...state.slice(0, index),
    				questionReducer(state[index], action),
    				...state(index + 1)
    			];
    		}
    		break;
    }
    return state;
};

export default questionsReducer;

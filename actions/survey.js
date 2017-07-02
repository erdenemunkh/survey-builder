import * as ACTIONS from "../constants/actions";

export const changeResponse = (id, value) => ({
	type: ACTIONS.CHANGE_RESP,
	id,
	value
});

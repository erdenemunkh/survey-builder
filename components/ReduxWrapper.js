import React from "react";
import { Provider } from 'react-redux'

import store from "../store";

const ReduxWrapper = (Component) => {
	return props => (<Provider store={store}>
		<Component {...props} />
	</Provider>);
};

export default ReduxWrapper;

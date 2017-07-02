import { connect } from "react-redux";

import * as actions from "../actions/survey";

import Question from "./Question";

function mapStateToProps(state) {
	return {

	};
}

function mapDispatchToProps(dispatch) {
	return {
		onChange(id, value) {
			dispatch(actions.changeResponse(id, value));
		}
	};
}

function mergeProps(stateProps, dispatchProps, ownProps) {
	return {
		...stateProps,
		...dispatchProps,
		...ownProps
	};
}

const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(Question);

export default QuestionContainer;

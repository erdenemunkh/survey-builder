import React from "react";
import PropTypes from "prop-types";

class TextBox extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(ev) {
        const { onChange } = this.props;
        if(typeof(onChange)=="function") {
            onChange(ev.target.value);
        }
    }
    render() {
        const {
        	multiple,
        	placeholder,
        	rows,
        	value
        } = this.props;
        if(multiple) {
        	return (<textarea
	            rows={rows || 4}
	            className="form-control"
	            onChange={this.handleChange}
	            placeholder={placeholder} />);
        }
        return (<input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            placeholder={placeholder} />);
    }
}
TextBox.propTypes = {
	multiple: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    value: PropTypes.string
};

export default TextBox;

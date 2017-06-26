import React from "react";
import PropTypes from "prop-types";
import shortId from "shortid";

import Checkbox from "./Checkbox";

class CheckGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            value: []
        };
        this.groupId = shortId.generate();
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        this.setState({ value: this.props.value || [] });
    }
    componentWillReceiveProps(nextProps) {
        // this.setState({ value: nextProps.value || [] });
    }
    handleChange(opt) {
        const { onChange } = this.props;
        let index;
        let value = this.state.value;
        index = this.state.value.findIndex(v => v===opt.label);
        if(opt.checked && index==-1) {
            value = [
                opt.label,
                ...this.state.value
            ];
        } else if(!opt.checked && index!=-1) {
            value = [
                ...this.state.value.slice(0, index),
                ...this.state.value.slice(index + 1)
            ];
        }
        this.setState({ value });
        if(typeof(onChange)=="function") {
            onChange(value);
        }
    }
    render() {
        const { options, value } = this.props;
        return (<div>
            {options.map(opt => (<Checkbox
                key={`${this.groupId}-${opt}`}
                name={this.groupId}
                label={opt}
                value={value===opt}
                onChange={this.handleChange} />))}
        </div>);
    }
}
CheckGroup.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.arrayOf(PropTypes.string)
};

export default CheckGroup;

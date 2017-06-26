import React from "react";
import PropTypes from "prop-types";
import shortId from "shortid";

import Radio from "./Radio";

class RadioGroup extends React.Component {
    constructor() {
        super();
        this.groupId = shortId.generate();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(opt) {
        const { onChange } = this.props;
        if(opt.checked && typeof(onChange)=="function") {
            onChange(opt.label);
        }
    }
    render() {
        const { options, value } = this.props;
        return (<div>
            {options.map(opt => (<Radio
                key={`${this.groupId}-${opt}`}
                name={this.groupId}
                label={opt}
                value={value===opt}
                onChange={this.handleChange} />))}
        </div>);
    }
}
RadioGroup.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string
};

export default RadioGroup;

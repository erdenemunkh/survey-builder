import React from "react";
import PropTypes from "prop-types";

const Radio = ({ name, label, value }) => {
    return (<div className="radio">
        <label>
            <input name={name} type="radio" value={value} />
            {label}
        </label>
        <style jsx>{`
            .radio label {
                display: block;
                padding: 5px 10px 5px 30px;
            }
            .radio label:hover {
                background-color: #f9f9f9;
            }
        `}</style>
    </div>);
};
Radio.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.bool
};

export default Radio;

import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ name, label, value }) => {
    return (<div className="checkbox">
        <label>
            <input type="checkbox" value={value} />
            {label}
        </label>
        <style jsx>{`
            .checkbox label {
                display: block;
                padding: 5px 10px 5px 30px;
            }
            .checkbox label:hover {
                background-color: #f9f9f9;
            }
        `}</style>
    </div>);
};
Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.bool
};

export default Checkbox;

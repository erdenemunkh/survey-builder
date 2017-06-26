import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ name, label, value, onChange }) => {
    const handleChange = ev => {
        if(typeof(onChange)=="function") {
            onChange({
                label,
                checked: ev.target.checked
            });
        }
    };
    return (<div className="checkbox">
        <label>
            <input type="checkbox" value={value} onChange={handleChange} />
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
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.bool
};

export default Checkbox;

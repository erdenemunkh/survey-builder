import React from "react";
import PropTypes from "prop-types";

import * as TYPES from "../constants/questionTypes";
import * as COLORS from "../constants/colors";

import CheckGroup from "./CheckGroup";
import RadioGroup from "./RadioGroup";
import RangeStyle from "./RangeStyle";
import TextBox from "./TextBox";

class Question extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(val) {
        this.props.onChange(this.props.id, val);
        console.log(this.props.statement, val);
    }
    render() {
        const {
            id,
            statement,
            responseType,
            responseOptions,
            responseTextRows,
            responseRange,
            placeholder,
            multiple
        } = this.props;

        let responseWidget;

        switch(responseType) {
            case TYPES.OPTION:
                responseWidget = multiple
                    ? (<CheckGroup
                        options={responseOptions}
                        onChange={this.handleChange} />)
                    : (<RadioGroup
                        options={responseOptions}
                        onChange={this.handleChange} />);
                break;

            case TYPES.TEXT:
                responseWidget = (<div className="form-group">
                    {responseTextRows==1
                        ? <TextBox
                            placeholder={placeholder}
                            onChange={this.handleChange} />
                        : <TextBox
                            multiple={true}
                            placeholder={placeholder}
                            rows={responseTextRows}
                            onChange={this.handleChange} />}
                </div>);
                break;

            case TYPES.RANGE:
                responseWidget = (<div className="row">
                    <div className="col-sm-6">
                        <div className="range range-primary">
                            <input type="range" min={responseRange[0]} max={responseRange[1]} />
                            <output>6</output>
                            <style jsx>{RangeStyle}</style>
                        </div>
                    </div>
                </div>);
                break;

            case TYPES.BOOLEAN: {
                const options = [ ...responseOptions ]    ;
                responseWidget = (<RadioGroup
                    options={options}
                    onChange={this.handleChange} />);
                break;
            }
        }

        return (<div className="panel">
            <div className="row">
                <div className="col-md-12">
                    <h2>{statement}</h2>
                    {responseWidget}
                </div>
            </div>
            <style jsx>{`
                .panel {
                    min-height: 200px;
                    padding: 40px 20px;
                }
                h2 {
                    color: ${COLORS.questionColor};
                    font-size: 2rem;
                    margin: 0 0 40px;
                }
            `}</style>
        </div>)
    }
}
Question.propTypes = {
    id: PropTypes.string.isRequired,
    statement: PropTypes.string.isRequired,
    responseType: PropTypes.string,
    responseOptions: PropTypes.arrayOf(PropTypes.string),
    responseTextRows: PropTypes.number,
    responseRange: PropTypes.arrayOf(PropTypes.number),
    placeholder: PropTypes.string,
    multiple: PropTypes.bool
};

export default Question;

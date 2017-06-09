import React from "react";
import PropTypes from "prop-types";
import * as TYPES from "../constants/questionTypes";
import * as COLORS from "../constants/colors";

import Checkbox from "./Checkbox";
import Radio from "./Radio";
import RangeStyle from "./RangeStyle";

class Question extends React.Component {
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
                responseWidget = multiple ? (<div>
                    {responseOptions.map(opt =>
                        (<Checkbox
                            key={`${id}-${opt}`}
                            name={id}
                            label={opt}
                            value={false} />))}
                    </div>) : (<div>
                    {responseOptions.map(opt =>
                        (<Radio
                            key={`${id}-${opt}`}
                            name={id}
                            label={opt}
                            value={false} />))}
                    </div>);
                break;

            case TYPES.TEXT:
                responseWidget = (<div className="form-group">
                    {responseTextRows==1
                        ? <input
                            type="text"
                            className="form-control"
                            placeholder={placeholder} />
                        : <textarea
                            rows={responseTextRows}
                            className="form-control"
                            placeholder={placeholder} />}
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

            case TYPES.BOOLEAN:
                responseWidget = (<div>
                    <Radio name={id} label={responseOptions[0]} value={false} />
                    <Radio name={id} label={responseOptions[1]} value={false} />
                </div>);
                break;
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

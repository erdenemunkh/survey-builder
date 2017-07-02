import React from "react";

import dataService from "../services/Data";

import Layout from "../components/Layout";
import Question from "../components/QuestionContainer";

class Survey extends React.Component {
    static async getInitialProps({ req }) {
        let survey;
        try {
            survey = await dataService.getSurvey(req.query.id, req);
        } catch(ex) {
            console.log(`Error: Survey ${req.query.id} not found`);
            return {};
        }
        if(!survey) {
            console.log("No such survey");
            return {};
        }
        return {
            questions: survey.questions || [],
            name: survey.name || "",
            description: survey.description || ""
        };
    }
    render() {
        const {
            name,
            description,
            questions
        } = this.props;

        return (<Layout title={name || "Start"} heading={name} description={description}>
            {questions && questions.length ? <div>
                <div className="form">
                    {this.props.questions.map(q => <Question key={q.id} {...q} />)}
                </div>
                <div className="text-right">
                    <button className="btn btn-success">Submit</button>
                </div>
            </div> : <div>
                Loading ...
            </div>}
        </Layout>);
    }
}

export default Survey;

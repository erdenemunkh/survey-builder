import React from "react";
import dataService from "../services/Data";

import Layout from "../components/Layout";
import Question from "../components/Question";

class Survey extends React.Component {
    static async getInitialProps({ req }) {
        const survey = await dataService.getSurvey(req.query.id, req);
        if(!survey)
            return {};
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

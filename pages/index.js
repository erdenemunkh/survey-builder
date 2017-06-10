import React from "react";
import dataService from "../services/Data";

import Layout from "../components/Layout";
import Question from "../components/Question";

class Home extends React.Component {
    static async getInitialProps({ req }) {
        const survey = await dataService.getSurvey(req.query.id, req);
        return {
            questions: survey && survey.questions || []
        };
    }
    render() {
        const { questions } = this.props;

        return (<Layout title="Survey Builder">
            {questions && questions.length ? <div>
                <div className="form">
                    {this.props.questions.map(q => <Question key={q.id} {...q} />)}
                </div>
                <button className="btn btn-success">Submit</button>
            </div> : <div>
                Loading ...
            </div>}
        </Layout>);
    }
}

export default Home;

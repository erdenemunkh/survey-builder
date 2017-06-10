import React from "react";
import dataService from "../services/Data";

import Layout from "../components/Layout";
import Question from "../components/Question";

import questions from "../.data/questions";

class Home extends React.Component {
    static async getInitialProps({ req, query }) {
        let survey = await dataService.getSurvey(req, {
            name: "Test 01"
        });
        console.log("EXISTING SURVEY: ", survey);
        if(!survey || !survey.length) {
            survey = await dataService.createSurvey({
                name: "Test 01",
                description: "test 01 descr",
                questions
            }, req);
        }
        return {
            survey
        };
    }
    render() {
        const { survey } = this.props;
        const generateData = () => {

        };
        return (<Layout title="Survey Builder">
            No of questions: {survey && survey.questions && survey.questions.length || 0}
        </Layout>);
    }
}

export default Home;

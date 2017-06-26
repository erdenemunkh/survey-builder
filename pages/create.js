import React from "react";
import dataService from "../services/Data";

import Layout from "../components/Layout";
import Question from "../components/Question";

import questions from "../.data/questions";

class Home extends React.Component {
    static async getInitialProps({ req, query }) {
        let survey = {};
        try {
            survey = await dataService.getSurvey(query.id, req);
        } catch(ex) {
            console.log(`Survey ${query.id} not found`);
        }
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

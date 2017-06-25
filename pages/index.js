import React from "react";

import Layout from "../components/Layout";
import GithubRibbon from "../components/GithubRibbon";

class Home extends React.Component {
    render() {
        return (<Layout title="Survey Builder">
            <GithubRibbon />
            <form action="/start" className="panel">
                <h2>Here to take a survey?</h2>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Enter your access code here"
                        name="id"
                        className="form-control"
                        required={true} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary pull-right" type="submit">Start</button>
                </div>
            </form>
            <style jsx>{`
                h2 {
                    font-size: 2.5rem;
                    margin: 0 0 30px 0;
                }
                .panel {
                    padding: 60px 40px;
                }
            `}</style>
        </Layout>);
    }
}

export default Home;

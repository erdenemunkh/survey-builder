import Layout from "../components/Layout";
import Question from "../components/Question";

import questions from "../data/questions";

const Home = () => (<Layout title="Survey Builder">
    <div>
        <div className="form">
            {questions.map(q => <Question key={q.id} {...q} />)}
        </div>
        <button className="btn btn-success">Submit</button>
    </div>
</Layout>);

export default Home;

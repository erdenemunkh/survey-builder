import axios from "axios";

class DataService {
    getSurvey(id, req) {
        if(req) {
            return req.models.Survey.findOne({ id });
        }
        return axios.get(`/api/survey/${id}`);
    }
    createSurvey(args, req) {
        const {
            name,
            description,
            config,
        } = args;

        const questions = args.questions.map(q => {
            return new req.models.Question({
                statement: q.statement,
                responseType: q.responseType,
                responseOptions: q.responseOptions,
                responseTextRows: q.responseTextRows,
                responseRange: q.responseRange,
                placeholder: q.placeholder
            });
        });

        const survey = new req.models.Survey({
            name,
            description,
            questions
        });

        return new Promise((fulfill, reject) => {
            survey.save((err, result) => {
                if(err) {
                    console.log(err);
                    reject(err);
                } else {
                    fulfill(result);
                }
            });
        });
    }
}
const dataService = new DataService();

export default dataService;

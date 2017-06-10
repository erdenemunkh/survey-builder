import { Survey } from "../data/models";

const surveyAPI = router => {
    router.get("/survey/:id", (req, res) => {
        const id = req.params.id;
        Survey.findOne({ id })
            .then(survey => res.json({ survey }))
            .catch(err => res.status(500).json({ error: err.message }));
    });
    return router;
};

export default surveyAPI;

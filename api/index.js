import { Router } from "express";

import surveyAPI from "./survey";

export default () => {
    const apiRoutes = Router();

    surveyAPI(apiRoutes);

    return apiRoutes;
};

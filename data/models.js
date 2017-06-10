import mongoose from "mongoose";

import { QuestionSchema, SurveySchema } from "./Schema";

export const Question = mongoose.model("Question", QuestionSchema);
export const Survey = mongoose.model("Survey", SurveySchema);

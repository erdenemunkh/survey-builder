import { Schema } from "mongoose";

const { ObjectId } = Schema.Types;

export const QuestionSchema = new Schema({
    id: {
        type: ObjectId,
        index: true,
        required: true,
        auto: true
    },
    statement: {
        type: String,
        required: true
    },
    responseType: {
        type: String,
        required: true,
        enum: [
            "boolean",
            "option",
            "range",
            "text"
        ],
        trim: true,
        lowercase: true
    },
    responseOptions: [ String ],
    responseTextRows: {
        type: Number,
        default: 1
    },
    responseRange: [ Number ],
    placeholder: String,
    response: String
});

export const Answer = new Schema({
    questionId: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

export const ResultSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    response: [ Answer ]
});

export const SurveySchema = new Schema({
    id: {
        type: ObjectId,
        index: true,
        required: true,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    },
    config: {
        accessCodes: [{
            accessType: {
                type: String,
                enum: [ "secret" ]
            },
            remaining: Number
        }],
        timeout: {
            type: Number,
            default: 0
        },
        maxAttempts: {
            type: Number,
            default: 0
        }
    },
    questions: {
        type: [ QuestionSchema ],
        required: true
    },
    results: {
        type: [ ResultSchema ]
    }
});

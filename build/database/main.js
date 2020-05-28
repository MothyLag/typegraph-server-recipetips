"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class DataBase {
    constructor() {
        // private readonly URI =
        //private readonly URI =
        //  'mongodb+srv://MothyLag:robomotymon100613@cluster0-cw6gu.mongodb.net/recipetips?retryWrites=true&w=majority';
        this.URI = 'mongodb://localhost:27017/recipetips';
    }
    connect() {
        mongoose
            .connect(process.env.MONGODB_URI || this.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then((connect) => console.log('connected to mongodb..'))
            .catch((e) => console.log('could not connect to mongodb', e));
    }
    startTransaction$() {
        return rxjs_1.from(mongoose_1.startSession()).pipe(operators_1.concatMap((session) => rxjs_1.of(session.startTransaction()).pipe(operators_1.map(() => session))));
    }
    commitTransaction$(session) {
        return rxjs_1.from(session.commitTransaction());
    }
}
exports.DataBase = DataBase;
//# sourceMappingURL=main.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class DataBase {
    constructor() {
        // private readonly URI =
        this.URI = 'mongodb+srv://MothyLag:robomotymon100613@cluster0-cw6gu.mongodb.net/recipetips?retryWrites=true&w=majority';
    }
    //private readonly URI = 'mongodb://localhost:27017/recipetips';
    connect() {
        try {
            mongoose.connect(this.URI, { useNewUrlParser: true });
        }
        catch (error) {
            console.log(error);
        }
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
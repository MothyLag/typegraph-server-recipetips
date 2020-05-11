"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const options = {
    timestamps: true
};
const despensaSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true
    },
    ingredients: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'ingredient',
            required: false
        }
    ],
    containers: {
        type: [String],
        required: false
    },
    license: {
        type: String,
        required: true
    }
}, options);
exports.DespensaModel = mongoose_1.model('despensa', despensaSchema);
//# sourceMappingURL=despensa.schema.js.map
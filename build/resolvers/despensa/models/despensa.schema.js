"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const options = {
    timestamps: true,
};
const despensaSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    items: [
        {
            type: Object,
            required: false,
        },
    ],
}, options);
exports.DespensaModel = mongoose_1.model('despensa', despensaSchema);
//# sourceMappingURL=despensa.schema.js.map
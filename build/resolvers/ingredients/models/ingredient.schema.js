"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ingredientSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    standardPrice: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
});
exports.ingredientModel = mongoose_1.model('ingredient', ingredientSchema);
//# sourceMappingURL=ingredient.schema.js.map
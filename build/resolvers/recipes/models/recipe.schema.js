"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const options = {
    timestamps: true
};
const recipeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        maxlength: 30,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'ingredient',
            required: true
        }
    ],
    difficult: Number,
    rate: [Number],
    userId: {
        type: String,
        required: true
    }
}, options);
exports.recipeModel = mongoose_1.model('recipe', recipeSchema);
//# sourceMappingURL=recipe.schema.js.map
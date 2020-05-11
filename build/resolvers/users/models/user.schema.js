"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const options = {
    timestamps: true
};
const userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
}, options);
userSchema.methods.comparePassword = function (pass) {
    return true;
};
exports.UserModel = mongoose_1.model('user', userSchema);
//# sourceMappingURL=user.schema.js.map
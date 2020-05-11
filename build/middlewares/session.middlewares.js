"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
exports.authMiddleware = (_, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(_.context.req.headers);
    const result = yield next();
    return result;
});
exports.getId = (_, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = jsonwebtoken_1.verify(_.context.req.headers.token, 'mothySecret');
    _.context.res.locals.userId = id;
    const result = yield next();
    return result;
});
//# sourceMappingURL=session.middlewares.js.map
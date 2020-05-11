"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const user_schema_1 = require("./models/user.schema");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const apollo_server_1 = require("apollo-server");
const jsonwebtoken_1 = require("jsonwebtoken");
let UserService = class UserService {
    findUserById(id) {
        return rxjs_1.from(user_schema_1.UserModel.findById(id).exec());
    }
    _countByEmail(email) {
        return rxjs_1.from(user_schema_1.UserModel.countDocuments({ email })).pipe(operators_1.map((emailCount) => emailCount >= 1));
    }
    _create(data) {
        return rxjs_1.from(new user_schema_1.UserModel(data).save());
    }
    _validate(exist, data) {
        return this._create(data);
    }
    create(data) {
        return this._countByEmail(data.email)
            .pipe(operators_1.tap((exist) => {
            if (exist)
                throw new apollo_server_1.ForbiddenError('usuario ya existente');
        }), operators_1.concatMap(() => this._create(data)), operators_1.map((user) => ({
            userName: user.userName,
            token: jsonwebtoken_1.sign({ id: user._id.toString() }, 'mothySecret'),
        })))
            .toPromise();
    }
    _searchUserByEmailORUser(email) {
        return rxjs_1.from(user_schema_1.UserModel.findOne({ $or: [{ userName: email }, { email: email }] }).exec()).pipe(operators_1.map((value) => {
            if (!value)
                throw new apollo_server_1.UserInputError('este usuario no esta registrado-' + Date.now());
            return value;
        }));
    }
    _comparePassword(password, user) {
        return rxjs_1.from(this._searchUserByEmailORUser(user.email)).pipe(operators_1.map((dbUser) => {
            if (!dbUser || dbUser.password != password)
                throw new apollo_server_1.UserInputError('contraseña incorrecta');
            return dbUser;
        }));
    }
    login(user) {
        return this._searchUserByEmailORUser(user.email)
            .pipe(operators_1.concatMap((logged) => this._comparePassword(user.password, logged)), operators_1.map((user) => ({
            userName: user.userName,
            token: jsonwebtoken_1.sign({ id: user._id.toString() }, 'mothySecret'),
        })))
            .toPromise();
    }
};
UserService = __decorate([
    typedi_1.Service()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
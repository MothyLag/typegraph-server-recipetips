"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const user_service_1 = require("./user.service");
const createUser_input_1 = require("./inputs/createUser.input");
const loggUser_input_1 = require("./inputs/loggUser.input");
const token_type_1 = require("../jwt/token.type");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    greet() {
        return 'hello world';
    }
    login(user) {
        return this.userService.login(user);
    }
    createUser(newUser) {
        return this.userService.create(newUser);
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "greet", null);
__decorate([
    type_graphql_1.Query(() => token_type_1.UserWithToken),
    __param(0, type_graphql_1.Arg('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loggUser_input_1.LoggUserInput]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Mutation(() => token_type_1.UserWithToken),
    __param(0, type_graphql_1.Arg('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_input_1.CreateUserInput]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "createUser", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map
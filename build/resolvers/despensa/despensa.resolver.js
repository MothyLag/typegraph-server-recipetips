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
const despensa_service_1 = require("./despensa.service");
const despensa_type_1 = require("./despensa.type");
const createDespensa_input_1 = require("./inputs/createDespensa.input");
const session_middlewares_1 = require("../../middlewares/session.middlewares");
const addIngredient_input_1 = require("./inputs/addIngredient.input");
let DespensaResolver = class DespensaResolver {
    constructor(despensaService) {
        this.despensaService = despensaService;
    }
    createDespensa(newDespensa, ctx) {
        const userId = ctx.res.locals.userId;
        return this.despensaService.createDespensa(newDespensa, userId);
    }
    getUserDespensa(ctx) {
        const userId = ctx.res.locals.userId;
        return this.despensaService.getDespensa(userId);
    }
    addItemDespensa(newIngredient, ctx) {
        const userId = ctx.res.locals.userId;
        return this.despensaService.addIngredient(newIngredient, userId);
    }
};
__decorate([
    type_graphql_1.Mutation(() => despensa_type_1.Despensa),
    type_graphql_1.UseMiddleware(session_middlewares_1.getId),
    __param(0, type_graphql_1.Arg('despensa')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDespensa_input_1.CreateDespensaInput, Object]),
    __metadata("design:returntype", void 0)
], DespensaResolver.prototype, "createDespensa", null);
__decorate([
    type_graphql_1.Query(() => despensa_type_1.Despensa),
    type_graphql_1.UseMiddleware(session_middlewares_1.getId),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DespensaResolver.prototype, "getUserDespensa", null);
__decorate([
    type_graphql_1.Mutation(() => despensa_type_1.Despensa),
    type_graphql_1.UseMiddleware(session_middlewares_1.getId),
    __param(0, type_graphql_1.Arg('ingredient')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addIngredient_input_1.AddIngredientInput, Object]),
    __metadata("design:returntype", void 0)
], DespensaResolver.prototype, "addItemDespensa", null);
DespensaResolver = __decorate([
    type_graphql_1.Resolver(),
    __metadata("design:paramtypes", [despensa_service_1.DespensaService])
], DespensaResolver);
exports.DespensaResolver = DespensaResolver;
//# sourceMappingURL=despensa.resolver.js.map
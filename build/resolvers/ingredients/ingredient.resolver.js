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
const ingredient_service_1 = require("./ingredient.service");
const createIngredient_input_1 = require("./inputs/createIngredient.input");
const ingredient_type_1 = require("./ingredient.type");
let IngredientResolver = class IngredientResolver {
    constructor(ingredientService) {
        this.ingredientService = ingredientService;
    }
    getAllIngredients() {
        return this.ingredientService.getAllIngredients();
    }
    createIngredient(newIngredient) {
        return this.ingredientService.create(newIngredient);
    }
};
__decorate([
    type_graphql_1.Query(() => [ingredient_type_1.Ingredient]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IngredientResolver.prototype, "getAllIngredients", null);
__decorate([
    type_graphql_1.Mutation(() => ingredient_type_1.Ingredient),
    __param(0, type_graphql_1.Arg('ingredient')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createIngredient_input_1.CreateIngredientInput]),
    __metadata("design:returntype", void 0)
], IngredientResolver.prototype, "createIngredient", null);
IngredientResolver = __decorate([
    type_graphql_1.Resolver(),
    __metadata("design:paramtypes", [ingredient_service_1.IngredientService])
], IngredientResolver);
exports.IngredientResolver = IngredientResolver;
//# sourceMappingURL=ingredient.resolver.js.map
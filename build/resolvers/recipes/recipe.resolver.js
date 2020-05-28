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
const recipe_type_1 = require("./recipe.type");
const recipe_service_1 = require("./recipe.service");
const createRecipe_input_1 = require("./inputs/createRecipe.input");
const session_middlewares_1 = require("../../middlewares/session.middlewares");
const recipeUpdateName_input_1 = require("./inputs/recipeUpdateName.input");
const recipeUpdatePreparation_input_1 = require("./inputs/recipeUpdatePreparation.input");
let RecipeResolver = class RecipeResolver {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    getRecipesUser(ctx) {
        const userId = ctx.res.locals.userId;
        return this.recipeService.getUserRecipes(userId);
    }
    createRecipe(newRecipe, ctx) {
        const userId = ctx.res.locals.userId;
        return this.recipeService.createRecipe(newRecipe, userId);
    }
    updateRecipeName(recipeData, ctx) {
        const userId = ctx.res.locals.userId;
        return this.recipeService.updateRecipeName(recipeData, userId);
    }
    updateRecipePreparation(recipeData, ctx) {
        const userId = ctx.res.locals.userId;
        return this.recipeService.updateRecipePreparation(recipeData, userId);
    }
};
__decorate([
    type_graphql_1.Query(() => [recipe_type_1.Recipe]),
    type_graphql_1.UseMiddleware(session_middlewares_1.getId),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecipeResolver.prototype, "getRecipesUser", null);
__decorate([
    type_graphql_1.Mutation(() => recipe_type_1.Recipe),
    type_graphql_1.UseMiddleware(session_middlewares_1.getId),
    __param(0, type_graphql_1.Arg('recipe')), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createRecipe_input_1.CreateRecipeInput, Object]),
    __metadata("design:returntype", void 0)
], RecipeResolver.prototype, "createRecipe", null);
__decorate([
    type_graphql_1.Mutation(() => recipe_type_1.Recipe),
    type_graphql_1.UseMiddleware(session_middlewares_1.getId),
    __param(0, type_graphql_1.Arg('recipe')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipeUpdateName_input_1.RecipeUpdateName, Object]),
    __metadata("design:returntype", void 0)
], RecipeResolver.prototype, "updateRecipeName", null);
__decorate([
    type_graphql_1.Mutation(() => recipe_type_1.Recipe),
    type_graphql_1.UseMiddleware(session_middlewares_1.getId),
    __param(0, type_graphql_1.Arg('recipe')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipeUpdatePreparation_input_1.RecipeUpdatePreparation, Object]),
    __metadata("design:returntype", void 0)
], RecipeResolver.prototype, "updateRecipePreparation", null);
RecipeResolver = __decorate([
    type_graphql_1.Resolver(),
    __metadata("design:paramtypes", [recipe_service_1.RecipeService])
], RecipeResolver);
//# sourceMappingURL=recipe.resolver.js.map
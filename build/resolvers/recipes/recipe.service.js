"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const typedi_1 = require("typedi");
const recipe_schema_1 = require("./models/recipe.schema");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let RecipeService = class RecipeService {
    _insertId$(recipe, userId) {
        return rxjs_1.of(recipe)
            .pipe(operators_1.map((recipe) => {
            return Object.assign(Object.assign({}, recipe), { userId });
        }))
            .toPromise();
    }
    _save$(recipe) {
        return rxjs_1.from(new recipe_schema_1.recipeModel(recipe).save());
    }
    createRecipe(recipe, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return rxjs_1.from(this._insertId$(recipe, userId))
                .pipe(operators_1.concatMap((data) => this._save$(data)))
                .toPromise();
        });
    }
    updateRecipeName(data, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield this.getRecipe(userId, data.recipeId);
            recipe.name = data.name;
            return yield recipe.save();
        });
    }
    updateRecipePreparation(data, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield this.getRecipe(userId, data.recipeId);
            recipe.preparation = data.preparation;
            recipe.ingredients = data.ingredients;
            return yield recipe.save();
        });
    }
    getRecipe(userId, recipeID) {
        recipe_schema_1.recipeModel.createCollection();
        return rxjs_1.from(recipe_schema_1.recipeModel.findOne({ $and: [{ userId }, { _id: recipeID }] }).exec()).toPromise();
    }
    getUserRecipes(userId) {
        recipe_schema_1.recipeModel.createCollection();
        return rxjs_1.from(recipe_schema_1.recipeModel.find({ userId }).exec()).toPromise();
    }
};
RecipeService = __decorate([
    typedi_1.Service()
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const recipe_schema_1 = require("./models/recipe.schema");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let RecipeService = class RecipeService {
    _insertId$(recipe, userId) {
        return rxjs_1.of(recipe).pipe(operators_1.map(recipe => {
            return Object.assign(Object.assign({}, recipe), { userId });
        }));
    }
    _save$(recipe) {
        return rxjs_1.from(new recipe_schema_1.recipeModel(recipe).save());
    }
    createRecipe(recipe, userId) {
        return rxjs_1.from(this._insertId$(recipe, userId))
            .pipe(operators_1.concatMap(newRecipe => this._save$(newRecipe)), operators_1.map(data => {
            return {
                name: data.name,
                userId: data.userId
            };
        }))
            .toPromise();
    }
};
RecipeService = __decorate([
    typedi_1.Service()
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
let CreateIngredientInput = class CreateIngredientInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateIngredientInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true, defaultValue: 0 }),
    __metadata("design:type", Number)
], CreateIngredientInput.prototype, "standardPrice", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true, defaultValue: '' }),
    __metadata("design:type", String)
], CreateIngredientInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateIngredientInput.prototype, "container", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true, defaultValue: 'kg' }),
    __metadata("design:type", String)
], CreateIngredientInput.prototype, "magnitud", void 0);
CreateIngredientInput = __decorate([
    type_graphql_1.InputType()
], CreateIngredientInput);
exports.CreateIngredientInput = CreateIngredientInput;
//# sourceMappingURL=createIngredient.input.js.map
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
let CreateDespensaInput = class CreateDespensaInput {
};
__decorate([
    type_graphql_1.Field({ defaultValue: 'userId' }),
    __metadata("design:type", String)
], CreateDespensaInput.prototype, "userId", void 0);
__decorate([
    type_graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], CreateDespensaInput.prototype, "ingredients", void 0);
__decorate([
    type_graphql_1.Field(() => [String], { nullable: true, defaultValue: 'verduras' }),
    __metadata("design:type", Array)
], CreateDespensaInput.prototype, "containers", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true, defaultValue: 'free' }),
    __metadata("design:type", String)
], CreateDespensaInput.prototype, "license", void 0);
CreateDespensaInput = __decorate([
    type_graphql_1.InputType()
], CreateDespensaInput);
exports.CreateDespensaInput = CreateDespensaInput;
//# sourceMappingURL=createDespensa.input.js.map
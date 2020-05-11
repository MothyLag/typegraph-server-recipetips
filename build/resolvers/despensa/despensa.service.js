"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const despensa_schema_1 = require("./models/despensa.schema");
let DespensaService = class DespensaService {
    _insertId$(data, id) {
        return rxjs_1.of(data).pipe(operators_1.map((despensa) => {
            despensa.userId = id;
            return despensa;
        }));
    }
    _save$(data) {
        return rxjs_1.from(new despensa_schema_1.DespensaModel(data).save());
    }
    createDespensa(data, id) {
        return rxjs_1.from(this._insertId$(data, id))
            .pipe(operators_1.concatMap((newDespensa) => this._save$(newDespensa)), operators_1.map((despensa) => {
            const data = {
                userId: despensa.userId,
                license: despensa.license,
                containers: despensa.containers,
            };
            console.log(data);
            return data;
        }))
            .toPromise();
    }
    addIngredient(ingredient, userId) {
        return rxjs_1.from(despensa_schema_1.DespensaModel.findByIdAndUpdate({ userId }, ingredient.ingredients)).toPromise();
    }
    getDespensa(userId) {
        return rxjs_1.from(despensa_schema_1.DespensaModel.find({ userId })).toPromise();
    }
};
DespensaService = __decorate([
    typedi_1.Service()
], DespensaService);
exports.DespensaService = DespensaService;
//# sourceMappingURL=despensa.service.js.map
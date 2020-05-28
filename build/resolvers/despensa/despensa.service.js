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
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const despensa_schema_1 = require("./models/despensa.schema");
let DespensaService = class DespensaService {
    _insertId$(data, id) {
        return rxjs_1.of(data).pipe(operators_1.map((despensa) => {
            return Object.assign(Object.assign({}, despensa), { userId: id });
        }));
    }
    _save$(data) {
        return rxjs_1.from(new despensa_schema_1.DespensaModel(data).save());
    }
    createDespensa(data, id) {
        return rxjs_1.from(this._insertId$(data, id))
            .pipe(operators_1.concatMap((newDespensa) => this._save$(newDespensa)), operators_1.map((despensa) => {
            return despensa;
        }))
            .toPromise();
    }
    addIngredient(newIngredient, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const despensa = yield this.getDespensa(userId, newIngredient.despensaID);
            yield despensa.items.push(newIngredient.item);
            return rxjs_1.from(despensa.save()).toPromise();
        });
    }
    getDespensa(userId, despensaID) {
        despensa_schema_1.DespensaModel.createCollection();
        return rxjs_1.from(despensa_schema_1.DespensaModel.findOne({ $and: [{ userId }, { _id: despensaID }] }).exec()).toPromise();
    }
    getDespensas(userId) {
        despensa_schema_1.DespensaModel.createCollection();
        return rxjs_1.from(despensa_schema_1.DespensaModel.find({ userId }).exec()).toPromise();
    }
    removeItem(data, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const despensa = yield this.getDespensa(userID, data.despensaID);
            const newItems = yield despensa.items.filter((item) => item.ingredientID != data.ingredientID);
            despensa.items = newItems;
            return despensa.save();
        });
    }
    updateItem(data, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const despensa = yield this.getDespensa(userID, data.despensaID);
            const newItems = yield despensa.items.map((item) => {
                if (item.ingredientID === data.item.ingredientID)
                    item = data.item;
                return item;
            });
            despensa.items = newItems;
            return despensa.save();
        });
    }
    updateDespensaName(data, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const despensa = yield this.getDespensa(userID, data.despensaID);
            despensa.name = data.name;
            return despensa.save();
        });
    }
    dropDespensa(despensaID, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const despensa = yield this.getDespensa(userID, despensaID);
            return despensa
                .remove()
                .then(() => true)
                .catch((error) => {
                console.log(error);
                return false;
            });
        });
    }
};
DespensaService = __decorate([
    typedi_1.Service()
], DespensaService);
exports.DespensaService = DespensaService;
//# sourceMappingURL=despensa.service.js.map
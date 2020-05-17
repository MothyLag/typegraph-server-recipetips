import { Service } from 'typedi';
import { from, of } from 'rxjs';
import { map, concatMap, tap } from 'rxjs/operators';
import {
  IDespensa,
  IDespensaInput,
  IDespensaAddInput,
  IDespensaRemoveInput,
  IDespensaUpdateNameInput,
} from './models/despensa.interface';
import { DespensaModel } from './models/despensa.schema';

@Service()
export class DespensaService {
  private _insertId$(data: IDespensaInput, id: string) {
    return of(data).pipe(
      map((despensa) => {
        return { ...despensa, userId: id } as IDespensa;
      })
    );
  }

  private _save$(data: IDespensa) {
    return from(new DespensaModel(data).save());
  }

  createDespensa(data: IDespensaInput, id: string) {
    return from(this._insertId$(data, id))
      .pipe(
        concatMap((newDespensa) => this._save$(newDespensa)),
        map((despensa) => {
          return despensa;
        })
      )
      .toPromise();
  }

  async addIngredient(newIngredient: IDespensaAddInput, userId: string) {
    const despensa = await this.getDespensa(userId, newIngredient.despensaID);
    await despensa.items.push(newIngredient.item);
    return from(despensa.save()).toPromise();
  }

  getDespensa(userId: string, despensaID: string) {
    DespensaModel.createCollection();
    return from(
      DespensaModel.findOne({ $and: [{ userId }, { _id: despensaID }] }).exec()
    ).toPromise();
  }

  getDespensas(userId: string) {
    DespensaModel.createCollection();
    return from(DespensaModel.find({ userId }).exec()).toPromise();
  }

  async removeItem(data: IDespensaRemoveInput, userID: string) {
    const despensa = await this.getDespensa(userID, data.despensaID);
    const newItems = await despensa.items.filter(
      (item) => item.ingredientID != data.ingredientID
    );
    despensa.items = newItems;
    return despensa.save();
  }

  async updateItem(data: IDespensaAddInput, userID) {
    const despensa = await this.getDespensa(userID, data.despensaID);
    const newItems = await despensa.items.map((item) => {
      if (item.ingredientID === data.item.ingredientID) item = data.item;
      return item;
    });
    despensa.items = newItems;
    return despensa.save();
  }

  async updateDespensaName(data: IDespensaUpdateNameInput, userID: string) {
    const despensa = await this.getDespensa(userID, data.despensaID);
    despensa.name = data.name;
    return despensa.save();
  }

  async dropDespensa(despensaID: string, userID: string) {
    const despensa = await this.getDespensa(userID, despensaID);
    return despensa
      .remove()
      .then(() => true)
      .catch((error) => {
        console.log(error);
        return false;
      });
  }
}

import { Service } from 'typedi';
import { from, of } from 'rxjs';
import { map, concatMap, tap } from 'rxjs/operators';
import {
  IDespensa,
  IDespensaInput,
  IDespensaAddInput,
  IDespensaRemoveInput,
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
    )
      .pipe(tap((res) => console.log(res)))
      .toPromise();
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
}

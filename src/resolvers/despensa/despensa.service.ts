import { Service } from 'typedi';
import { from, of } from 'rxjs';
import { map, concatMap, tap } from 'rxjs/operators';
import { IDespensa, IDespensaDocument } from './models/despensa.interface';
import { DespensaModel } from './models/despensa.schema';
import { AddIngredientInput } from './inputs/addIngredient.input';
import { set } from 'mongoose';

@Service()
export class DespensaService {
  private _insertId$(data: IDespensa, id: string) {
    return of(data).pipe(
      map(despensa => {
        despensa.userId = id;
        return despensa;
      })
    );
  }

  private _save$(data: IDespensa) {
    return from(new DespensaModel(data).save());
  }

  createDespensa(data: IDespensa, id: string) {
    return from(this._insertId$(data, id))
      .pipe(
        concatMap(newDespensa => this._save$(newDespensa)),
        map(despensa => {
          const data = {
            userId: despensa.userId,
            license: despensa.license,
            containers: despensa.containers
          } as IDespensa;
          console.log(data);
          return data;
        })
      )
      .toPromise();
  }

  addIngredient(ingredient: AddIngredientInput, userId: string) {
    return from(
      DespensaModel.findByIdAndUpdate(
        { userId },
        set('ingredients', ingredient.ingredients)
      )
    ).toPromise();
  }

  getDespensa(userId: string) {
    return from(DespensaModel.find({ userId })).toPromise();
  }
}

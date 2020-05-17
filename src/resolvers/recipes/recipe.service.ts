import { Service } from 'typedi';
import {
  IRecipe,
  ICreateRecipe,
  IRecipeDocument,
} from './models/recipe.interfaces';
import { recipeModel } from './models/recipe.schema';
import { from, of } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { CreateRecipeInput } from './inputs/createRecipe.input';

@Service()
export class RecipeService {
  private _insertId$(recipe: ICreateRecipe, userId: string) {
    return of(recipe)
      .pipe(
        map((recipe) => {
          return ({
            ...recipe,
            userId,
          } as unknown) as IRecipe;
        })
      )
      .toPromise();
  }

  private _save$(recipe: IRecipe) {
    return from(new recipeModel(recipe).save());
  }

  async createRecipe(recipe: ICreateRecipe, userId: string) {
    return from(this._insertId$(recipe, userId))
      .pipe(concatMap((data) => this._save$(data)))
      .toPromise();
  }
}

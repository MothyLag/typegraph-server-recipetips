import { Service } from 'typedi';
import { IRecipe } from './models/recipe.interfaces';
import { recipeModel } from './models/recipe.schema';
import { from, of } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { CreateRecipeInput } from './inputs/createRecipe.input';

@Service()
export class RecipeService {
  private _insertId$(recipe: CreateRecipeInput, userId: string) {
    return of(recipe).pipe(
      map(recipe => {
        return {
          ...recipe,
          userId
        };
      })
    );
  }

  private _save$(recipe: CreateRecipeInput) {
    return from(new recipeModel(recipe).save());
  }

  createRecipe(recipe: CreateRecipeInput, userId: string) {
    return from(this._insertId$(recipe, userId))
      .pipe(
        concatMap(newRecipe => this._save$(newRecipe)),
        map(data => {
          return {
            name: data.name,
            userId: data.userId
          };
        })
      )
      .toPromise();
  }
}

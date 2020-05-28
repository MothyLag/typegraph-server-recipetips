import { Service } from 'typedi';
import {
  IRecipe,
  ICreateRecipe,
  IRecipeDocument,
  IRecipeUpdateName,
  IRecipeUpdatePreparation,
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

  async updateRecipeName(data: IRecipeUpdateName, userId: string) {
    const recipe = await this.getRecipe(userId, data.recipeId);
    recipe.name = data.name;
    return await recipe.save();
  }

  async updateRecipePreparation(data: IRecipeUpdatePreparation, userId) {
    const recipe = await this.getRecipe(userId, data.recipeId);
    recipe.preparation = data.preparation;
    recipe.ingredients = data.ingredients;
    return await recipe.save();
  }

  getRecipe(userId: string, recipeID: string) {
    recipeModel.createCollection();
    return from(
      recipeModel.findOne({ $and: [{ userId }, { _id: recipeID }] }).exec()
    ).toPromise();
  }

  getUserRecipes(userId: string) {
    recipeModel.createCollection();
    return from(recipeModel.find({ userId }).exec()).toPromise();
  }
}

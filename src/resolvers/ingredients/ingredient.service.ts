import { Service } from 'typedi';
import { IIngredient } from './models/ingredient.interfaces';
import { ingredientModel } from './models/ingredient.schema';

@Service()
export class IngredientService {
  create(data: IIngredient) {
    return new ingredientModel(data).save();
  }

  getAllIngredients() {
    return ingredientModel.find({}).exec();
  }
}

import { Document, Model } from 'mongoose';
export interface IIngredient {
  name: string;
  standardPrice?: number;
  description?: string;
}

export interface IIngredientDocument extends IIngredient, Document {}
export interface IIngredientModel extends Model<IIngredientDocument> {}

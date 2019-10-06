import { Model, Document } from 'mongoose';

export interface IRecipe {
  name: string;
  description: string;
  ingredients: string[];
  difficult?: number;
  rate?: number[];
  userId: string;
}

export interface IRecipeDocument extends IRecipe, Document {}
export interface IRecipeModel extends Model<IRecipeDocument> {}

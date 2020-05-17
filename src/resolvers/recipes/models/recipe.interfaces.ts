import { Model, Document } from 'mongoose';
import { IDespensaItem } from '../../despensaItem/despensaItem.interface';

export interface IRecipe {
  name: string;
  description: string;
  preparation: string;
  ingredients: IDespensaItem[];
  difficult?: number;
  rate?: number[];
  userId: string;
}

export interface ICreateRecipe {
  name: string;
  description: string;
  ingredients: IDespensaItem[];
  difficult?: number;
}

export interface IRecipeDocument extends IRecipe, Document {}
export interface IRecipeModel extends Model<IRecipeDocument> {}

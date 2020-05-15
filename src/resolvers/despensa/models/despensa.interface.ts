import { Document, Model } from 'mongoose';
import { IDespensaItem } from '../../despensaItem/despensaItem.interface';
import { IIngredient } from '../../ingredients/models/ingredient.interfaces';

export interface IDespensa {
  userId: string;
  name: string;
  items?: IDespensaItem[];
}

export interface IDespensaInput {
  name: string;
  items?: IDespensaItem[];
}

export interface IDespensaRemoveInput {
  ingredientID: string;
  despensaID: string;
}

export interface IDespensaAddInput {
  despensaID: string;
  item: IDespensaItem;
}

export interface IDespensaDocument extends Document, IDespensa {}

export interface IDespensaModel extends Model<IDespensaDocument> {}

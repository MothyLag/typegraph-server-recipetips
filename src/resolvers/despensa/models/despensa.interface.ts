import { Document, Model } from 'mongoose';

export interface IDespensa {
  userId: string;
  ingredients?: string[];
  containers?: string[];
  license: string;
}

export interface IDespensaDocument extends Document, IDespensa {}

export interface IDespensaModel extends Model<IDespensaDocument> {}

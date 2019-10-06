import { Schema, SchemaOptions, Model, model } from 'mongoose';
import {
  IDespensa,
  IDespensaModel,
  IDespensaDocument
} from './despensa.interface';

const options: SchemaOptions = {
  timestamps: true
};

const despensaSchema: Schema<IDespensa> = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    ingredients: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ingredient',
        required: false
      }
    ],
    containers: {
      type: [String],
      required: false
    },
    license: {
      type: String,
      required: true
    }
  },
  options
);

export const DespensaModel: IDespensaModel = model<IDespensaDocument>(
  'despensa',
  despensaSchema
);

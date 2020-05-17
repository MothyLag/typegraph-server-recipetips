import { Schema, SchemaOptions, Model, model } from 'mongoose';
import {
  IDespensa,
  IDespensaModel,
  IDespensaDocument,
} from './despensa.interface';

const options: SchemaOptions = {
  timestamps: true,
};

const despensaSchema: Schema<IDespensa> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    items: [
      {
        type: Object,
        required: false,
      },
    ],
  },
  options
);

export const DespensaModel: IDespensaModel = model<IDespensaDocument>(
  'despensa',
  despensaSchema
);

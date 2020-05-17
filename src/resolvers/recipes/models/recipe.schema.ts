import { Schema, SchemaOptions, model } from 'mongoose';
import { IRecipeDocument } from './recipe.interfaces';
const options: SchemaOptions = {
  timestamps: true,
};
const recipeSchema: Schema<IRecipeDocument> = new Schema(
  {
    name: {
      type: String,
      maxlength: 30,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    preparation: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        type: Object,
        required: true,
      },
    ],
    difficult: Number,
    rate: [Number],
    userId: {
      type: String,
      required: true,
    },
  },
  options
);

export const recipeModel = model<IRecipeDocument>('recipe', recipeSchema);

import { Schema, model } from 'mongoose';
import { IIngredientDocument } from './ingredient.interfaces';

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  standardPrice: {
    type: Number,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  container: {
    type: String,
    required: true
  },
  magnitud: {
    type: String,
    required: false
  }
});

export const ingredientModel = model<IIngredientDocument>(
  'ingredient',
  ingredientSchema
);

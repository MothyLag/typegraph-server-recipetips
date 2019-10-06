import { InputType, Field } from 'type-graphql';
import { IIngredient } from '../models/ingredient.interfaces';

@InputType()
export class CreateIngredientInput implements Partial<IIngredient> {
  @Field()
  name: string;

  @Field({ nullable: true, defaultValue: 0 })
  standardPrice?: number;

  @Field({ nullable: true, defaultValue: '' })
  description?: string;

  @Field()
  container: string;

  @Field({ nullable: true, defaultValue: 'kg' })
  magnitud?: string;
}

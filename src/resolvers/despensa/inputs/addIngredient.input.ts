import { InputType, Field } from 'type-graphql';

@InputType()
export class AddIngredientInput {
  @Field(() => [String])
  ingredients: string[];
}

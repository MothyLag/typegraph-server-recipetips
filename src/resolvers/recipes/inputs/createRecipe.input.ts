import { InputType, Field, Int } from 'type-graphql';
import { Recipe } from '../recipe.type';

@InputType()
export class CreateRecipeInput implements Partial<Recipe> {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  ingredients: string[];

  @Field(() => Int, { nullable: true })
  difficult: number;

  @Field(() => [Int], { nullable: true })
  rate: number[];
}

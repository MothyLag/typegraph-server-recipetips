import { InputType, Field, Int } from 'type-graphql';
import { Recipe } from '../recipe.type';
import { DespensaItem } from '../../despensaItem/despensaItem.type';

@InputType()
export class CreateRecipeInput implements Partial<Recipe> {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  preparation: string;

  @Field(() => [DespensaItem])
  ingredients: DespensaItem[];

  @Field(() => Int, { nullable: true })
  difficult: number;
}

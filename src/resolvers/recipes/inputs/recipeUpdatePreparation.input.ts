import { InputType, Field } from 'type-graphql';
import { DespensaItem } from '../../despensaItem/despensaItem.type';

@InputType()
export class RecipeUpdatePreparation {
  @Field()
  recipeId: string;

  @Field(() => String)
  preparation: string;

  @Field(() => [DespensaItem])
  ingredients: DespensaItem[];
}

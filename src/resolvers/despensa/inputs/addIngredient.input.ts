import { InputType, Field } from 'type-graphql';
import { DespensaItem } from '../../despensaItem/despensaItem.type';

@InputType()
export class AddIngredientInput {
  @Field(() => DespensaItem)
  item: DespensaItem;

  @Field()
  despensaID: string;
}

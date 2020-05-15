import { InputType, Field } from 'type-graphql';
import { DespensaItem } from '../../despensaItem/despensaItem.type';

@InputType()
export class CreateDespensaInput {
  @Field()
  name: string;

  @Field(() => [DespensaItem], { nullable: true, defaultValue: [] })
  items: DespensaItem[];
}

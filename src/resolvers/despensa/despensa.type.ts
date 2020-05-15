import { ObjectType, Field, ID } from 'type-graphql';
import { DespensaItem } from '../despensaItem/despensaItem.type';

@ObjectType()
export class Despensa {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field()
  name: string;

  @Field()
  userId: string;

  @Field(() => [DespensaItem], { nullable: true })
  items?: DespensaItem[];
}

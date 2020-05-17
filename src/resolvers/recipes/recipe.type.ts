import { ObjectType, Field, Int } from 'type-graphql';
import { DespensaItem } from '../despensaItem/despensaItem.type';

@ObjectType()
export class Recipe {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [DespensaItem])
  ingredients: DespensaItem[];

  @Field(() => Int, { nullable: true })
  difficult?: number;

  @Field(() => [Int], { nullable: true, defaultValue: [] })
  rate?: number[];

  @Field(() => String)
  userId: string;
}

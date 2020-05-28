import { ObjectType, Field, Int, ID } from 'type-graphql';
import { DespensaItem } from '../despensaItem/despensaItem.type';

@ObjectType()
export class Recipe {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  preparation: string;

  @Field(() => [DespensaItem])
  ingredients: DespensaItem[];

  @Field(() => Int, { nullable: true })
  difficult?: number;

  @Field(() => [Int], { nullable: true, defaultValue: [] })
  rate?: number[];

  @Field(() => String)
  userId: string;
}

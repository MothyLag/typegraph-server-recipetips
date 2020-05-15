import { ObjectType, Field, InputType } from 'type-graphql';

@ObjectType()
@InputType('despensaItem')
export class DespensaItem {
  @Field()
  ingredientID: string;

  @Field()
  quantity: number;

  @Field()
  unit: string;
}

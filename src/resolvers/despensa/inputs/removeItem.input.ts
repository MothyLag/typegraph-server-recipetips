import { InputType, Field } from 'type-graphql';

@InputType()
export class RemoveItemInput {
  @Field()
  ingredientID: string;

  @Field()
  despensaID: string;
}

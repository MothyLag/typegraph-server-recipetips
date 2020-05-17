import { InputType, Field } from 'type-graphql';

@InputType()
export class UpdateDespensaNameInput {
  @Field()
  name: string;

  @Field()
  despensaID: string;
}
